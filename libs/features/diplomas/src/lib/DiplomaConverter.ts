import { DiplomaDTO } from './DiplomaDTO';
import { Diploma } from './Diploma';

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
			new Date(dto.submissionDate).toISOString(),
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
