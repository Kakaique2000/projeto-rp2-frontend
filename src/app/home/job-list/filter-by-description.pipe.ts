import { Pipe, PipeTransform } from '@angular/core';
import { JobDto } from '../../shared/models/job.models';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {

    transform(photos: JobDto[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery) {
            return photos.filter(photo =>
                photo.description.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return photos;
        }
    }
}
