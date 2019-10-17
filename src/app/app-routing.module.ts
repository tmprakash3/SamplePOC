import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import {CreateComponent} from './account/create/create.component';
import {DetailComponent} from './account/detail/detail.component';

const Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  {
    path: 'products', component: AccountComponent, 
    children: [
      { path: 'create-account',component: CreateComponent },
      { path: 'detail', component: DetailComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
