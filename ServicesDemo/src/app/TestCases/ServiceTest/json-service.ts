import { Observable } from "rxjs";
import * as jsonData from '../../../assets/jsonData.json';
import {Products} from '../../ServicesDemo/model/products';
import { of } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JsonServiceTest {
products: Products[];

  constructor(private http: HttpClient) {
    this.products = jsonData.products;
   }
   /*function to return JSON data*/
   public getJsonData(): Observable<Products[]> {
    return  of(this.products);
  }
}
