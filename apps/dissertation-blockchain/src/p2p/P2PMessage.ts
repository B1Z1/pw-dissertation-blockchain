import { P2PMessageType } from './P2PMessageType';
import { BlockDTO } from '../dto/BlockDTO';

export interface P2PMessageBlockchain {
	type: P2PMessageType.BLOCKCHAIN;
	data: {
		blockchainDTO: BlockDTO[]
	};
}

export interface P2PMessageNewBlock {
	type: P2PMessageType.NEW_BLOCK;
	data: {
		blockDTO: BlockDTO
	};
}

export type P2PMessage = P2PMessageBlockchain | P2PMessageNewBlock;
