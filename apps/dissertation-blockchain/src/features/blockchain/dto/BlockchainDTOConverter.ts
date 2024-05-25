import { BlockDTO } from './BlockDTO';
import { Block, BlockHeader } from '../Block';
import { DiplomaConverter, } from '@pw-dissertation-blockchain/features/diplomas';

export class BlockchainDTOConverter {
	static fromBlockchainDTOToBlockchain(dto: BlockDTO[]): Block[] {
		return dto.map((blockDTO) => this.fromBlockDTOToBlock(blockDTO));
	}

	static fromBlockDTOToBlock(dto: BlockDTO): Block {
		const blockHeader = new BlockHeader(
			dto.index,
			dto.timestamp,
			dto.previousHash
		);
		const diploma = DiplomaConverter.fromDiplomaDTOToDiploma(dto.diploma);

		return new Block(blockHeader, diploma, dto.hash);
	}

	static fromBlockchainToBlockchainDTO(blockchain: Block[]): BlockDTO[] {
		return blockchain.map((block) => this.fromBlockToBlockDTO(block));
	}

	static fromBlockToBlockDTO(block: Block): BlockDTO {
		return new BlockDTO(
			block.getBlockHeader().getIndex(),
			block.getBlockHeader().getTimestamp(),
			block.getBlockHeader().getPreviousHash(),
			DiplomaConverter.fromDiplomaToDiplomaDTO(block.getDiplomaData()),
			block.getHash()
		);
	}
}
