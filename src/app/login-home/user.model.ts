import { Knowledge } from "../home/job-list/job-list.models";
import { CompanyModel } from './../new-company/new-company.model';

export interface Role {
  id: number;
  name: string;
  authority: string;
}

export interface Token {
  token: string;
  type: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  profilePic: string;
  roles: Role[];
  emailVerified: boolean;
  knowledges: UserKnowledge[];
  city: string;
  state: string;
  biography: string;
}

export interface UserDetails extends User {
  companies: CompanyModel[],
  fullBiography: string,
}

export interface UserKnowledge {
  knowledge:      Knowledge;
  knowledgeLevel: KnowledgeLevel;
  validated:      boolean;
}

export type KnowledgeLevel = 'INICIANTE' | 'MÉDIO' | 'AVANÇADO' | 'EXPERT'
