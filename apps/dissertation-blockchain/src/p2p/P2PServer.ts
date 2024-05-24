import { Blockchain } from '../blockchain/Blockchain';
import Swarm from 'discovery-swarm';
import crypto from 'crypto';
import defaults from 'dat-swarm-defaults';
import { P2PMessageType } from './P2PMessageType';
import { P2PMessage, P2PMessageBlockchain, P2PMessageNewBlock } from './P2PMessage';
import { BlockchainDTOConverter } from '../dto/BlockchainDTOConverter';
import { Block } from '../blockchain/Block';
import { P2PPeer } from './P2PPeer';
import { BlockDTO } from '../dto/BlockDTO';

export class P2PServer {
	private readonly topic = 'diploma-blockchain';
	private readonly peers: Map<string, P2PPeer> = new Map<string, P2PPeer>();
	private readonly swarmConfig = defaults({
		id: crypto.randomBytes(32),
	});
	private readonly swarm = Swarm(this.swarmConfig);

	private sequenceNumber = 0;

	constructor(
		private readonly blockchain: Blockchain
	) {
		this.initialize();
	}

	listen(port: number): void {
		this.swarm.listen(port);

		console.log(`P2P Server listening on port ${port}`);

		this.swarm.join(this.topic);
	}

	sendChain(conn: any): void {
		const blockchainDTO = BlockchainDTOConverter.fromBlockchainToBlockchainDTO(
			this.blockchain.getChain()
		);
		const p2pMessage: P2PMessageBlockchain = {
			type: P2PMessageType.BLOCKCHAIN,
			data: {
				blockchainDTO
			}
		};

		conn.write(JSON.stringify(p2pMessage));
	}

	broadCastNewBlock(blockDTO: BlockDTO): void {
		const p2pMessage: P2PMessageNewBlock = {
			type: P2PMessageType.NEW_BLOCK,
			data: {
				blockDTO
			}
		};

		this.peers.forEach(peer => {
			peer.getConnection().write(JSON.stringify(p2pMessage));
		});
	}

	connectToPeers(peers: string[]): void {
		peers.forEach(peer => {
			this.swarm.join(peer);
		});
	}

	getPeers(): Array<string> {
		return Array.from(this.peers.keys());
	}

	private handleMessage(message: P2PMessage): void {
		console.log('Received message:', message.type);

		if (message.type === P2PMessageType.BLOCKCHAIN) {
			const { blockchainDTO } = message.data;
			const blockchain = BlockchainDTOConverter.fromBlockchainDTOToBlockchain(blockchainDTO);

			console.log('Received blockchain:', JSON.stringify(blockchain));

			this.replaceChain(blockchain);
		} else if (message.type === P2PMessageType.NEW_BLOCK) {
			const { blockDTO } = message.data;
			const block = BlockchainDTOConverter.fromBlockDTOToBlock(blockDTO);

			console.log('Received new block:', JSON.stringify(block));

			this.blockchain.addBlock(block);
		}
	}

	private replaceChain(blockchain: Block[]): void {
		const oldBlockchainLength = this.blockchain.getChain().length;

		if (blockchain.length > oldBlockchainLength && this.isChainValid(blockchain)) {
			this.blockchain.updateChain(blockchain);
		}
	}

	private isChainValid(blockchain: Block[]): boolean {
		for (let i = 1; i < blockchain.length; i++) {
			const currentBlock = blockchain[i];
			const previousBlock = blockchain[i - 1];

			if (currentBlock.getBlockHeader().getPreviousHash() !== previousBlock.getHash()) {
				return false;
			}
		}

		return true;
	}

	private initialize(): void {
		this.swarm.on('connection', (conn, info) => {
			const sequence = this.sequenceNumber;
			const peerId = info.id.toString('hex');
			console.log(`Connected to peer: ${peerId}`);

			if (info.initiator) {
				try {
					conn.setKeepAlive(true, 600);
				} catch (exception) {
					console.error(exception);
				}
			}

			conn.on('data', data => {
				const message = JSON.parse(data.toString());

				this.handleMessage(message);
			});

			conn.on('close', () => {
				console.log(`Connection ${sequence} closed, peerId: ${peerId}`);

				if (this.peers.get(peerId)?.getSequence() === sequence) {
					this.peers.delete(peerId);
				}
			});

			const peer = new P2PPeer(sequence, conn);
			this.peers.set(peerId, peer);

			this.sendChain(conn);

			this.increaseSequenceNumber();
		});
	}

	private increaseSequenceNumber(): void {
		this.sequenceNumber++;
	}
}
