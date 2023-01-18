import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoaderService {
  private loading = new Subject<boolean>();
  constructor() {}
  show() {
    this.loading.next(true);
  }
  hide() {
    this.loading.next(false);
  }
  updatedLoaderListener() {
    return this.loading.asObservable();
  }
}
