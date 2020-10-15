
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SubjectService {
  public msg = new Subject<string>();
  setMessage(message: string) {
    this.msg.next(message); 
  }
}
