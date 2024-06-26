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
			Number(dto.submissionDateTime),
			dto.keywords,
			dto.fileHash
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
			diploma.getSubmissionDateTime(),
			diploma.getKeywords(),
			diploma.getFileHash()
		);
	}
}
