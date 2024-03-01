import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class PagesModule { }
