import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SecondComponent } from './Routing/SecondComponent/secondComponent';
import { AuthGuardService } from './Routing/auth-guard-service';

const routes: Routes = [
  { path: 'second', component: SecondComponent,
  canActivate: [AuthGuardService],
  children: [
    {
      path:'',
      loadChildren:'./Routing/SecondComponent/second.module#SecondModule'
    }
  ]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
