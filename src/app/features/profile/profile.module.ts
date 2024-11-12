import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './components/information/information.component';
import { BalanceComponent } from './components/balance/balance.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
		children: [
			{
				path: 'information',
				component: InformationComponent
			},
			{
				path: 'balance', component: BalanceComponent
			},
			{
				path: '**', redirectTo: 'information', pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	declarations: [
		ProfileComponent,
		InformationComponent,
		BalanceComponent
	],
	imports: [
		CommonModule,

		RouterModule.forChild(routes)
	]
})
export class ProfileModule { }
