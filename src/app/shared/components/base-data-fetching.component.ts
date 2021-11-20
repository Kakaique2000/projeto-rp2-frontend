import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({ template: '' })
export class BaseDataFetchComponent implements OnDestroy {

  subscriptions: Subscription[] = [];
  isLoading = false;

  addSub(...sub: Subscription[]) {
    this.subscriptions.push(...sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }




}
