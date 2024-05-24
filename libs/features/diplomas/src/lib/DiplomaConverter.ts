import { Diploma, DiplomaDTO } from '@pw-dissertation-blockchain/features/diplomas';

export class DiplomaConverter {
	static fromDiplomaDTOsToDiplomas(dtos: DiplomaDTO[]): Diploma[] {
		return dtos.map((dto) => DiplomaConverter.fromDiplomaDTOToDiploma(dto));
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
