import { DiplomaDTO } from './DiplomaDTO';

export class BlockDTO {
	constructor(
		readonly index: number,
		readonly timestamp: number,
		readonly previousHash: string,
		readonly diploma: DiplomaDTO,
		readonly hash?: string
	) {
	}
}
