import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child2Component } from './Child2/Child2';

const routes: Routes = [
   
  ];
 
 
@NgModule({
  declarations: [  Child2Component,
    Child2Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports:[RouterModule]
})
export class SecondModule { }