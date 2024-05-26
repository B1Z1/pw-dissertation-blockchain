import { blockchain } from './features/blockchain/Blockchain';
import { p2pServer } from './features/p2p/P2PServer';
import * as process from 'node:process';
import getPort from 'get-port';
import express from 'express';
import { BlockchainDTOConverter } from './features/blockchain/dto/BlockchainDTOConverter';
import { DiplomaConverter, DiplomaDTO } from '@pw-dissertation-blockchain/features/diplomas';
import cors from 'cors';
import { mockDiplomas } from './features/generator/mockDiplomas';

async function initialize(): Promise<void> {
	const p2pPort = await getPort({
		port: [
			Number(process.env.P2P_PORT) || 5001,
			...getPort.makeRange(5002, 5100),
		],
	});
	const httpPort = await getPort({
		port: [
			Number(process.env.HTTP_PORT) || 3001,
			...getPort.makeRange(3002, 3100),
		],
	});
	const app = express();

	app.use(express.json());
	app.use(cors());

	app.get('/blocks', (req, res) => {
		const chainDTO = BlockchainDTOConverter.fromBlockchainToBlockchainDTO(
			blockchain.getChain()
		);

		res.status(200).json(chainDTO);
	});

	app.get('/diplomas', (req, res) => {
		const chainDTO = BlockchainDTOConverter.fromBlockchainToBlockchainDTO(blockchain.getChain());
		const diplomasDTO = chainDTO.map(blockDTO => blockDTO.diploma);

		res.status(200).json(diplomasDTO);
	});

	app.post('/generate-mock-diplomas', (req, res) => {
		for (const mockDiploma of mockDiplomas) {
			blockchain.createBlock(mockDiploma);
		}

		res.redirect('/blocks');
	});

	app.post('/add-diploma', (req, res) => {
		const diplomaDTO: DiplomaDTO | undefined = req.body;

		if (!diplomaDTO) {
			res.status(400).send('Bad request: diploma not found');
			return;
		}

		const diploma = DiplomaConverter.fromDiplomaDTOToDiploma(diplomaDTO);

		blockchain.createBlock(diploma);

		const blockDTO = BlockchainDTOConverter.fromBlockToBlockDTO(
			blockchain.getLatestBlock()
		);

		p2pServer.broadCastNewBlock(blockDTO);

		res.status(200).send('Diploma added to the blockchain');
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
