import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import {CreateComponent} from './account/create/create.component';
import {DetailComponent} from './account/detail/detail.component';

const routes: Routes = [
  { path: 'accounts', component: AccountComponent,
    children: [
      {
          path: 'create-account',
          component: CreateComponent
      },
      {
          path: 'detail',
          component: DetailComponent
      }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
