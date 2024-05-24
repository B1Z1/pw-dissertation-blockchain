import { BlockDTO } from './BlockDTO';
import { Block, BlockHeader } from '../blockchain/Block';
import { DiplomaDTO } from './DiplomaDTO';
import { Diploma } from '../blockchain/Diploma';

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
		const diploma = this.fromDiplomaDTOToDiploma(dto.diploma);

		return new Block(
			blockHeader,
			diploma,
			dto.hash
		);
	}

	static fromDiplomaDTOToDiploma(dto: DiplomaDTO): Diploma {
		return new Diploma(
			dto.title,
			dto.author,
			dto.advisor,
			dto.university,
			dto.department,
			dto.abstract,
			dto.submissionDate,
			dto.keywords
		);
	}

	static fromBlockchainToBlockchainDTO(blockchain: Block[]): BlockDTO[] {
		return blockchain.map((block) => this.fromBlockToBlockDTO(block));
	}

	static fromBlockToBlockDTO(block: Block): BlockDTO {
		return new BlockDTO(
			block.getBlockHeader().getIndex(),
			block.getBlockHeader().getTimestamp(),
			block.getBlockHeader().getPreviousHash(),
			this.fromDiplomaToDiplomaDTO(block.getDiplomaData()),
			block.getHash()
		);
	}

	static fromDiplomaToDiplomaDTO(diploma: Diploma): DiplomaDTO {
		return new DiplomaDTO(
			diploma.getTitle(),
			diploma.getAuthor(),
			diploma.getAdvisor(),
			diploma.getUniversity(),
			diploma.getDepartment(),
			diploma.getAbstract(),
			diploma.getSubmissionDate(),
			diploma.getKeywords()
		);
	}
}
