import { CompanyDto } from './company.model';
import { JobApplicationDto } from './job-application.model';
import { KnowledgeDto } from './knowledge.model';

export interface JobDto {

  id: number;
  title: string;
  description: string;
  salary: Number;
  knowledges: KnowledgeDto[];
  city: string;
  companyLogo?: string;

}

export interface JobDetailsDto {
  id:              number;
  title:           string;
  description: string;
  city: string;
  state: string;
  fullDescription: string;
  salary:          number;
  knowledges:      KnowledgeDto[];
  company: CompanyDto;
  createdAt: string;
}

export interface JobRecruiterDetailsDto extends Omit<JobDetailsDto, 'company'> {
  companyId: number;
  jobApplications: JobApplicationDto[];
}



