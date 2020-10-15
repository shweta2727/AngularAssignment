import { Component, OnInit } from '@angular/core';
import { JsonService} from  '../../ServicesDemo/services/json-service';
import { Products} from '../../ServicesDemo/model/products';
import { of, interval} from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-operator',
  templateUrl: './Operators.html',
})
export class OperatorComponent implements OnInit {
    products : Products[];
  constructor(private JsonService : JsonService){

  }
  ngOnInit(){
    this.JsonService.getJsonData().subscribe((data : Products[]) => this.products = data);
  }
  filterData(){
     let product = this.products.filter(data => data.id =1);
  }
  MapData(){
      this.products.map(data=> data.price*100);
  }
  MergeMapData(){
    let price = of('10', '20', '30');
    let newData = price.pipe(
    mergeMap(data => interval(1000).pipe(map(inner => data + inner))),
);
  }

  ReduceData(){
      let sum = 10;
      this.products.reduce(data => data+10, sum);
  }
}
