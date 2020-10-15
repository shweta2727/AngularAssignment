import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder, FormControl } from '@angular/forms';
import { ReactiveFormTestComponent } from './reactiveFormTest';

describe('ReactiveFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        ReactiveFormTestComponent
      ],
    }).compileComponents();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(ReactiveFormTestComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('CustomValidator', () => {
    const fixture = TestBed.createComponent(ReactiveFormTestComponent);
    const app = fixture.componentInstance;
    const control = new FormControl('age');
    control.setValue('61');
    expect(app.validateAge(control)).toEqual(false);
  });
});
