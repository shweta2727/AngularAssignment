import { Component, OnInit } from '@angular/core';
import {PhoneFormatPipe} from '../CustomPipe';

@Component({
  selector: 'app-pipedirective',
  templateUrl: './PipeDirective.html'
})
export class PipeDirectiveComponent  {
phoneNo:string = "12345678967";
inputTest:string ="abcsdgsdfdfsfsfsf";
  constructor(phoneFormatPipe: PhoneFormatPipe){

  }
}
