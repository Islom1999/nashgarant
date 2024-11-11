import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositComponent } from './deposit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: DepositComponent
  }
];

@NgModule({
  declarations: [
    DepositComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class DepositModule { }
