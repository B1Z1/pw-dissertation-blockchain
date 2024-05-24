import { DiplomaDTO } from '@pw-dissertation-blockchain/features/diplomas';

export class BlockDTO {
  constructor(
    readonly index: number,
    readonly timestamp: number,
    readonly previousHash: string,
    readonly diploma: DiplomaDTO,
    readonly hash?: string
  ) {}
}
