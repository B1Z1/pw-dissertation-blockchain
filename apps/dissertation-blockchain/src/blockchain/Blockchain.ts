import { Block, BlockHeader } from './Block';
import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';

export class Blockchain {
  private chain: Block[] = [this.createGenesisBlock()];

  createGenesisBlock() {
    const blockHeader = new BlockHeader(0, new Date().getTime(), '0');
    const diplomaData = new Diploma(
      'Genesis Diploma',
      'Genesis Author',
      'Genesis Advisor',
      'Genesis University',
      'Genesis Departament',
      'Genesis Abstract',
      new Date('2021-01-01').toISOString(),
      ['Genesis Keyword']
    );

    return new Block(blockHeader, diplomaData);
  }

  updateChain(chain: Block[]) {
    this.chain = [...chain];
  }

  getChain(): Block[] {
    return this.chain;
  }

  getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block: Block) {
    this.chain.push(block);
  }
}
