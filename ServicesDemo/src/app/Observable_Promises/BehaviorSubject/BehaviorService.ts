import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BehaviorSubjectService {
  public status: BehaviorSubject<string> = new BehaviorSubject<string>("default");
 
  setStatus(status: string) {
    this.status.next(status); 
  }
  getStatus() {
    return this.status;
  }
}
