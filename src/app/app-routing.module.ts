import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutsComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./features').then((m) => m.HomeModule)
      },
      {
        path: 'withdrawal',
        loadChildren: () => import('./features').then((m) => m.WithdrawalModule)
      },
      {
        path: 'deposit',
        loadChildren: () => import('./features').then((m) => m.DepositModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./features').then((m) => m.OrderModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./features').then((m) => m.ProfileModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
