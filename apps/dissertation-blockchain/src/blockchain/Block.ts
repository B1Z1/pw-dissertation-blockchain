import { Diploma } from './Diploma';
import crypto from 'crypto';

export class BlockHeader {
	constructor(
		private readonly index: number,
		private readonly timestamp: number,
		private readonly previousHash: string
	) {
	}

	getIndex(): number {
		return this.index;
	}

	getTimestamp(): number {
		return this.timestamp;
	}

	getPreviousHash(): string {
		return this.previousHash;
	}
}

export class Block {
	constructor(
		private readonly blockHeader: BlockHeader,
		private readonly diplomaData: Diploma,
		private readonly hash?: string
	) {
		this.hash = this.hash ?? this.calculateHash();
	}

	getBlockHeader(): BlockHeader {
		return this.blockHeader;
	}

	getDiplomaData(): Diploma {
		return this.diplomaData;
	}

	getHash(): string {
		return this.hash;
	}

	private calculateHash(): string {
		return crypto.createHash('sha256')
			.update(`${JSON.stringify(this.blockHeader)}${JSON.stringify(this.diplomaData)}`)
			.digest('hex');
	}
}
