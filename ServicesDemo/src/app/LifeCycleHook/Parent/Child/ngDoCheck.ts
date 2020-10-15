import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/ServicesDemo/model/products';

@Component({
  selector: 'app-doCheck',
  templateUrl: './ngDoCheck.html'
})
export class NgDoCheckComponent {
@Input()
item:Products;
  constructor(){

  }

 ngDoCheck(){
this.checkRange();
}
  checkRange(){
    if(this.item.price>200){
      console.log("price is high");
    }
  }
}
