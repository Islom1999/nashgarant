import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
	selector: 'app-deposit',
	templateUrl: './deposit.component.html',
	styleUrl: './deposit.component.scss'
})
export class DepositComponent {
	constructor(private location: Location) { }
	goBack(): void {
		this.location.back();
	}
}
