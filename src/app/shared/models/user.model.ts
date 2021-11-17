import { CompanyModel } from '../../new-company/new-company.model';
import { JobApplicationDto } from './job-application.model';
import { KnowledgeDto } from './knowledge.model';

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
  experience: UserExperienceDto[];
  certificates: UserCertifiedDto[];
}

export interface UserForm extends Omit<UserDto, 'knowledges'>{
  knowledges: UserKnowledgeForm[];
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

export interface UserKnowledgeForm {
  knowledgeId:    number;
  knowledgeLevel: KnowledgeLevel;
}

export interface UserExperienceDto {
  office:      String;
  companyName: String;
  initialDate: String;
  endDate:     String;
}

export interface UserCertifiedDto {
  name: String;
  url: String;
}

export type KnowledgeLevel = 'INICIANTE' | 'MÉDIO' | 'AVANÇADO' | 'EXPERT'
