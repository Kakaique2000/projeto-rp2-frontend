import { JobDto } from './job.models';

export interface KnowledgeDto {
  id:   number;
  name: string;
  image?: string;
  description: string;
  jobs?: JobDto[];
}

export interface KnowledgeDetailsDto extends KnowledgeDto {
  contents?: ContentDto[];
}

export interface ContentDto {
  contentType: string;
  title:       string;
  url:         string;
  description: string;
  imageUrl:    string;
}
