import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointUtils {

  constructor(public breakpointObserver: BreakpointObserver) { }

  getAsGrid<T = any>(items: T[]) {
    return this.breakpointObserver
    .observe(['(min-width: 1024px)', '(min-width: 768px)', '(min-width: 640px)'])
      .pipe(
        map((state) => getGridByBreakpoints(state, items ))
    )
  }
}


export function getGridByBreakpoints<T = any>(breakPointState: BreakpointState, items: T[]) {
  if (breakPointState.breakpoints['(min-width: 1024px)']) {
    return [
      items.filter((_, index) => index % 3 === 0),
      items.filter((_, index) => index % 3 === 1),
      items.filter((_, index) => index % 3 === 2),
    ]
  }
  if (breakPointState.breakpoints['(min-width: 768px)']) {
    return [
      items.filter((_, index) => index % 2 === 0),
      items.filter((_, index) => index % 2 === 1),
    ]
  }

  return [items];
}
