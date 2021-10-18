import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, of, Observable } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {

  transform(val: string, size: number): any {
    if (val.length > size) {
      return val.substring(0, size - 3) + '...';
    }
    return val;
  }
}
