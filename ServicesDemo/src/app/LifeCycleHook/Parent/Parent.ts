import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/ServicesDemo/model/products';
import {JsonService} from '../../ServicesDemo/services/json-service';

@Component({
  selector: 'app-parent',
  templateUrl: './Parent.html'
})
export class ParentComponent implements OnInit{
  products : Products[];
  singleProduct : Products;
  constructor(private JsonService : JsonService){

  }
  ngOnInit(){
    this.JsonService.getJsonData().subscribe((data : Products[]) => this.products = data);
    this.singleProduct = this.products[0];
  }
}
