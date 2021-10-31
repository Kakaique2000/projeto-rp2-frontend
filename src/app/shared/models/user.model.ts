import { CompanyModel } from '../../new-company/new-company.model';
import { JobApplicationDto } from './job-application.model';
import { KnowledgeDto as KnowledgeDto } from "./job.models";

export interface Role {
  id: number;
  name: string;
  authority: string;
}

export interface Token {
  token: string;
  type: string;
  user: UserDto;
}

export interface UserDto {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  profilePic: string;
  roles: Role[];
  emailVerified: boolean;
  knowledges: UserKnowledgeDto[];
  city: string;
  state: string;
  biography: string;
  jobApplications: JobApplicationDto[];
}

export interface UserDetailsDto extends UserDto {
  companies: CompanyModel[],
  fullBiography: string,
}

export interface UserKnowledgeDto {
  knowledge:      KnowledgeDto;
  knowledgeLevel: KnowledgeLevel;
  validated:      boolean;
}

export type KnowledgeLevel = 'INICIANTE' | 'MÉDIO' | 'AVANÇADO' | 'EXPERT'
