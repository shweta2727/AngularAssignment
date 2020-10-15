import { Component } from '@angular/core';
import { SubjectService } from '../SubjectService';
import { BehaviorSubjectService } from '../../BehaviorSubject/BehaviorService';

@Component({
  selector: 'app-subjectservice',
  templateUrl: './SubjectComponent.html',
  providers: [SubjectService, BehaviorSubjectService] //Component level Service
})
export class SubjectComponent {
    message: string;
    status: string;
  constructor(private subjectService : SubjectService, private behaviorSubjectService : BehaviorSubjectService){
  }

updateMessage(msg:string){
    this.subjectService.setMessage(msg);
    this.getMessage();
    this.behaviorSubjectService.setStatus("default");
    this.behaviorSubjectService.status.subscribe(data => this.status = data);
}
getMessage(){
    this.subjectService.msg.subscribe(data => this.message = data);
}
}
