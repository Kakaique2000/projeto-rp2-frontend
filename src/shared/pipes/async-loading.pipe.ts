import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, of, Observable } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

@Pipe({
  name: 'asyncLoading',
})
export class AsyncLoading implements PipeTransform {
  
  transform<T>(obj: Observable<T>): Observable<{loading: boolean, value?:T, error?: any}>;
  transform(val: Observable<any>): any {
    return isObservable(val)
      ? val.pipe(
        map(value => ({ loading: false, value })),
        startWith({ loading: true }),
        catchError(error => of({ loading: false, error }))
      )
      : val;
  }
}
