import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs'

@Component({
  selector: 'app-obs-promise',
  templateUrl: './ObservableToPromise.html',
})
export class ObservableToPromise implements OnInit {
data : string[];
  constructor(){

  }
  ngOnInit(){
      this.convertObservableToPromise();
  }
  convertObservableToPromise(){
    let data = of(["red","blue","green"]);
    data.subscribe(data => console.log('obs',data) );
    data.toPromise().then(data=>console.log('to Promise', data));
    /* Not much of a difference can be seen here between Promise and Observable here
    but we can make use of Promise when we want something to happen immediately without any trigger
    */
  }
}
