export class Diploma {
  constructor(
    private readonly title: string,
    private readonly author: string,
    private readonly advisor: string,
    private readonly university: string,
    private readonly department: string,
    private readonly abstract: string,
    private readonly submissionDate: string,
    private readonly keywords: string[]
  ) {}

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getAdvisor(): string {
    return this.advisor;
  }

  getUniversity(): string {
    return this.university;
  }

  getDepartment(): string {
    return this.department;
  }

  getAbstract(): string {
    return this.abstract;
  }

  getSubmissionDate(): string {
    return this.submissionDate;
  }

  getKeywords(): string[] {
    return this.keywords;
  }
}
