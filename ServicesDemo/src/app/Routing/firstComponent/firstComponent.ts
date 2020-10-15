import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './firstComponent.html'
})
export class FirstComponent  {

  constructor(private route: Router){

  }
  navigatetoSecondPage(){
     this.route.navigate(['second']); 
  }
}
