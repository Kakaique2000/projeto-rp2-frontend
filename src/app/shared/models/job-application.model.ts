import { JobDto } from './job.models';
import { UserDto } from './user.model';

export interface JobApplicationDto {
  job: JobDto;
  user: UserDto;
  approved: boolean | null;
  updatedAt: string;
  createdAt: string;
}
