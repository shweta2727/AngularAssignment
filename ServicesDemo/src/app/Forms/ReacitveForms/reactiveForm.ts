import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactiveForm.html'
})
export class ReactiveFormComponent implements OnInit {
    profileForm: FormGroup;
  constructor( private fb: FormBuilder){

  }
  ngOnInit() {  
    this.profileForm = this.fb.group({  
      name: ['', Validators.required],  
      age: [18, [Validators.required, this.validateAge]],  
 
    }  
    );  
  } 
  /*Custom Validation*/
  validateAge(control: FormControl) {  
    if(control.value > 60){ 
    return false;
    }  
  }
  
}
