import { Pipe, PipeTransform } from '@angular/core';
import { JobModel } from './job-list/job-list.models';

@Pipe({ name: 'filterByJob'})
export class FilterByJob implements PipeTransform {

    transform(jobs: JobModel[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery) {
            return jobs.filter( job=>
                job.title.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return jobs;
        }
    }
}