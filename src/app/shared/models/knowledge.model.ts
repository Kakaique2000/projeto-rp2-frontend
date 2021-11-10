import { JobDto } from './job.models';

export interface KnowledgeDto {
  id:   number;
  name: string;
  description: string;
  jobs?: JobDto[];
  contents?: ContentDto[];
}

export interface ContentDto {
  contentType: string;
  title:       string;
  url:         string;
  description: string;
  imageUrl:    string;
}
