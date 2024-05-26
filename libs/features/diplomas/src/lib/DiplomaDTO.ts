export class DiplomaDTO {
	constructor(
		readonly title: string,
		readonly author: string,
		readonly advisor: string,
		readonly university: string,
		readonly department: string,
		readonly abstract: string,
		readonly submissionDateTime: number,
		readonly keywords: string[]
	) {
	}
}
