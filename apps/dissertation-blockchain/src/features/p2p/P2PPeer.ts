export class P2PPeer {
	constructor(
		private readonly sequence: number,
		private readonly connection: any
	) {
	}

	getSequence(): number {
		return this.sequence;
	}

	getConnection(): any {
		return this.connection;
	}
}
