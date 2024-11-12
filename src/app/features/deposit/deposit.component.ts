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
	toogleTxt: string = 'Максимум'
	maxBtn(input: HTMLInputElement): void {
		if (!input.value) {
			this.toogleTxt = 'Очистить';
			input.value = '38934398'
			input.blur();
			input.disabled = true;
		} else {
			this.toogleTxt = 'Максимум';
			input.value = '';
			input.disabled = false
			input.focus();
		}
	}
}
