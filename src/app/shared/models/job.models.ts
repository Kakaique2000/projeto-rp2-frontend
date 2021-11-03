import { CompanyDto } from './company.model';
import { JobApplicationDto } from './job-application.model';

export interface JobDto {

  id: number;
  title: string;
  description: string;
  salary: Number;
  knowledges: { id: number, name: string }[];
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

export interface KnowledgeDto {
  id:   number;
  name: string;
  jobs?: any[];
}



