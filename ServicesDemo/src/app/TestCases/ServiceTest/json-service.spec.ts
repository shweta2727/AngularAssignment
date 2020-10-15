import { TestBed } from '@angular/core/testing';
import { Products } from 'src/app/ServicesDemo/model/products';
import { JsonServiceTest } from './json-service';
import { of } from 'rxjs';

let jsonService: JsonServiceTest;
let jsonServiceSpy: jasmine.SpyObj<JsonServiceTest>;
let jsonServiceTest: JsonServiceTest;

const spy = jasmine.createSpyObj('getJsonData', ['getValue']);
beforeEach(async () => {
    await TestBed.configureTestingModule({
        providers: [
            JsonServiceTest,
          { provide: JsonServiceTest, useValue: spy }
        ]
    }).compileComponents();
  });
  beforeEach(() => {
    jsonServiceSpy = jasmine.createSpyObj('getJsonData', ['getJsonData']);
    jsonServiceTest = new JsonServiceTest(jsonServiceSpy as any);
  });
  fit('should return expected values (getJsonData called once)', () => {
    const expectedProducts: Products[] =
      [{
        "id" : 1,
        "productName" : "tshirt",
        "price": 200
    },
    {
        "id" : 2,
        "productName" : "tshirt",
        "price": 300
    },
    {
        "id" : 3,
        "productName" : "tshirt",
        "price": 400
    },
    {
        "id" : 4,
        "productName" : "tshirt",
        "price": 500
    }];
  
    jsonServiceSpy.getJsonData.and.returnValue(of(expectedProducts));
  
    jsonServiceTest.getJsonData().subscribe(
      heroes => expect(heroes).toEqual(expectedProducts, 'expected heroes'),
      fail
    );
  });
  
