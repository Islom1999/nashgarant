import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'app-withdrawal',
	templateUrl: './withdrawal.component.html',
	styleUrl: './withdrawal.component.scss'
})
export class WithdrawalComponent implements OnInit {
	activeLogo!: any
	activeCurrency!: string

	logoSection = [
		{ id: '1', image: 'https://nashgarant.me/assets/images/exchanges/POK.svg', name: 'ПокерОК', has_bot: true, currency: ['RUB', 'BYN', 'KZT',], bot: { deposit: 1222, withdraw: 1221, min: 1212, max: 1212112, time: "5-10 min", link: 'https://t.me/luxonobmenbot' } },
		{ id: '2', image: 'https://nashgarant.me/assets/images/exchanges/LUX.svg', name: 'Luxon', has_bot: true, currency: ['RUB', 'BYN', 'KZT', 'UAH'], bot: { deposit: 1222, withdraw: 1221, min: 1212, max: 1212112, time: "5-10 min", link: 'https://t.me/luxonobmenbot' } },
		{ id: '3', image: 'https://nashgarant.me/assets/images/exchanges/GG.svg', name: 'GGPoker', has_bot: false, currency: ['UAH', 'RUB', 'BYN', 'KZT',] },
		{ id: '4', image: 'https://nashgarant.me/assets/images/exchanges/ACR.svg', name: 'ACR Poker', has_bot: false, currency: ['RUB', 'BYN', 'KZT', 'UAH'] },
		{ id: '5', image: 'https://nashgarant.me/assets/images/exchanges/PK.svg', name: 'PokerKing', has_bot: false, currency: ['RUB', 'BYN', 'KZT', 'UAH'] },
		{ id: '6', image: 'https://nashgarant.me/assets/images/exchanges/RS.svg', name: 'RedStar', has_bot: false, currency: ['RUB', 'BYN', 'KZT', 'UAH'] },
	]

	constructor(private location: Location) { }

	ngOnInit(): void {
		this.selectOption1(this.logoSection[0].name)
	}

	goBack(): void {
		this.location.back();
	}
	activeButton: string = 'account'
	ActiveButton(button: string) {
		this.activeButton = button;
	}


	dropdownOpen1 = false;

	toggleDropdown1() {
		this.dropdownOpen1 = !this.dropdownOpen1;
		this.dropdownOpen2 = false;
	}

	selectOption1(option: string) {
		this.activeLogo = this.logoSection.find(o => o.name === option);
		this.activeCurrency = this.activeLogo.currency[0];
	}
	dropdownOpen2 = false;

	toggleDropdown2() {
		this.dropdownOpen2 = !this.dropdownOpen2;
		this.dropdownOpen1 = false;
	}

	selectOption2(option: string) {
		this.activeCurrency = option;
	}

	@HostListener('document:click', ['$event'])
	handleOutsideClick(event: Event) {
		const target = event.target as HTMLElement;
		if (!target.closest('.custom-select')) {
			this.dropdownOpen1 = false;
			this.dropdownOpen2 = false;
		}
	}
}
