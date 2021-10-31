import { Pipe, PipeTransform } from '@angular/core';
import { JobDto } from '../shared/models/job.models';

@Pipe({ name: 'filterByJob'})
export class FilterByJob implements PipeTransform {

    transform(jobs: JobDto[], descriptionQuery: string) {
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
