import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/json-service';
import { Products } from '../model/products';


@Component({
  selector: 'app-service',
  templateUrl: './ServiceComponent.html',
  providers: [JsonService] //Component level Service
})
export class ServiceComponent implements OnInit {
  products : Products[];
  constructor(private JsonService : JsonService){
  }

ngOnInit(){
  this.JsonService.getJsonData().subscribe((data : Products[]) => this.products = data);
  this.JsonService.getJsonDataHttp().subscribe((data : Products[]) => this.products = data);
}
}
