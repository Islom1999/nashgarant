import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-withdrawal',
	templateUrl: './withdrawal.component.html',
	styleUrl: './withdrawal.component.scss'
})
export class WithdrawalComponent {
	constructor(private location: Location) { }
	goBack(): void {
		this.location.back();
	}
	activeButton: string = 'account'
	ActiveButton(button: string) {
		this.activeButton = button;
	}
}
