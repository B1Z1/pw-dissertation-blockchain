import { Blockchain } from './blockchain/Blockchain';
import { P2PServer } from './p2p/P2PServer';
import * as process from 'node:process';
import getPort from 'get-port';
import express from 'express';
import { BlockchainDTOConverter } from './dto/BlockchainDTOConverter';
import { DiplomaDTO } from './dto/DiplomaDTO';
import { Block, BlockHeader } from './blockchain/Block';


async function initialize(): Promise<void> {
  const p2pPort = await getPort({
    port: [Number(process.env.P2P_PORT) || 5001, ...getPort.makeRange(5002, 5100)]
  });
  const httpPort = await getPort({
    port: [Number(process.env.HTTP_PORT) || 3001, ...getPort.makeRange(3002, 3100)]
  });
  const blockchain = new Blockchain();
  const p2pServer = new P2PServer(blockchain);

  const app = express();

  app.use(express.json());

  app.get('/blocks', (req, res) => {
    const chainDTO = BlockchainDTOConverter.fromBlockchainToBlockchainDTO(blockchain.getChain());

    res.json(chainDTO);
  });

  app.post('/add-diploma', (req, res) => {
    const diplomaDTO: DiplomaDTO | undefined = req.body;

    if (!diplomaDTO) {
      res.status(400).send('Bad request: diploma not found');
      return;
    }

    const diploma = BlockchainDTOConverter.fromDiplomaDTOToDiploma(diplomaDTO);

    const previousBlock = blockchain.getLatestBlock();
    const blockHeader = new BlockHeader(
      previousBlock.getBlockHeader().getIndex() + 1,
      new Date().getTime(),
      previousBlock.getHash()
    );

    const block = new Block(blockHeader, diploma);

    blockchain.addBlock(block);

    const blockDTO = BlockchainDTOConverter.fromBlockToBlockDTO(blockchain.getLatestBlock());

    p2pServer.broadCastNewBlock(blockDTO);

    res.redirect('/blocks');
  });

  app.get('/peers', (req, res) => {
    res.json(p2pServer.getPeers());
  });

  app.post('/connect-peers', (req, res) => {
    const { peers } = req.body;

    if (!peers || !Array.isArray(peers)) {
      res.status(400).send('Bad request: peer not found');
      return;
    }

    p2pServer.connectToPeers(peers);

    res.redirect('/peers');
  });

  p2pServer.listen(p2pPort);
  app.listen(httpPort, () => {
    console.log(`HTTP server listening on port ${httpPort}`);
  });
}

initialize();
