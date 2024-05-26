import { Block, BlockHeader } from './Block';
import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';

class Blockchain {
	private chain: Block[] = [this.createGenesisBlock()];

	updateChain(chain: Block[]) {
		this.chain = [...chain];
	}

	getChain(): Block[] {
		return this.chain;
	}

	getLatestBlock(): Block {
		return this.chain[this.chain.length - 1];
	}

	createBlock(diploma: Diploma): void {
		const previousBlock = this.getLatestBlock();
		const blockHeader = new BlockHeader(
			previousBlock.getBlockHeader().getIndex() + 1,
			new Date().getTime(),
			previousBlock.getHash()
		);
		const block = new Block(blockHeader, diploma);

		this.addBlock(block);
	}

	addBlock(block: Block) {
		this.chain.push(block);
	}

	private createGenesisBlock() {
		const blockHeader = new BlockHeader(0, new Date().getTime(), '0');
		const diplomaData = new Diploma(
			'Genesis Diploma',
			'Genesis Author',
			'Genesis Advisor',
			'Genesis University',
			'Genesis Departament',
			'Genesis Abstract',
			new Date('2021-01-01').getTime(),
			['Genesis Keyword']
		);

		return new Block(blockHeader, diplomaData);
	}
}

export const blockchain = new Blockchain();
