import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawalComponent } from './withdrawal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: WithdrawalComponent
  }
];

@NgModule({
  declarations: [
    WithdrawalComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class WithdrawalModule { }
