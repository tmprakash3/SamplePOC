import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import {CreateComponent} from './account/create/create.component';
import {DetailComponent} from './account/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdGuard } from './guard/auth-gaurd.guard';


const Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  {
    path: 'products', component: AccountComponent, 
    children: [
      { path: 'create-account',component: CreateComponent },
    ] 
  },
  { path: 'details/:id', component: DetailComponent, canActivate: [AuthGaurdGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
