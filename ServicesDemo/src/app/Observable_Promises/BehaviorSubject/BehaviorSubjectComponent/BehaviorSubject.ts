import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../Subject/SubjectService';
import { BehaviorSubjectService } from '../BehaviorService';

@Component({
  selector: 'app-behaviorsubjectservice',
  templateUrl: './BehaviorSubject.html',
  providers: [BehaviorSubjectService] //Component level Service
})
export class BehaviorSubject implements OnInit {
    status: string;
    message: string;
  constructor(private subjectService : SubjectService, private behaviorSubjectService : BehaviorSubjectService){
  }
ngOnInit(){
    this.getStatus();
}
updateStatus(status:string){
    this.behaviorSubjectService.setStatus(status);
    this.getStatus();
    this.subjectService.setMessage('Not Clicked');
    this.subjectService.msg.subscribe(data => this.message = data);
}
getStatus(){
    this.behaviorSubjectService.status.subscribe(data => this.status = data);
}
}
