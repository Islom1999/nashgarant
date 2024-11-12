import { Component, OnInit } from '@angular/core';

export interface IBot {
	deposit: number
	withdraw: number
	min: number
	max: number
	time: string
	link: string
}

export interface ILogo {
	id: string
	image: string
	name: string
	has_bot: boolean
	currency: string[]
	bot?: IBot
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	activeLogo!: ILogo
	activeCurrency!: string
	toogleactiveButton: 'вывод' | 'депозит' = 'вывод'

	logoSection: ILogo[] = [
		{ id: '1', image: 'https://nashgarant.me/assets/images/exchanges/POK.svg', name: 'POK', has_bot: true, currency: ['RUB', 'BYN', 'KZT',], bot: { deposit: 1222, withdraw: 1221, min: 1212, max: 1212112, time: "5-10 min", link: 'https://t.me/luxonobmenbot' } },
		{ id: '2', image: 'https://nashgarant.me/assets/images/exchanges/LUX.svg', name: 'LUX', has_bot: true, currency: ['RUB', 'BYN', 'KZT', 'UAH'], bot: { deposit: 1222, withdraw: 1221, min: 1212, max: 1212112, time: "5-10 min", link: 'https://t.me/luxonobmenbot' } },
		{ id: '3', image: 'https://nashgarant.me/assets/images/exchanges/GG.svg', name: 'GG', has_bot: false, currency: ['UAH', 'RUB', 'BYN', 'KZT',] },
		{ id: '4', image: 'https://nashgarant.me/assets/images/exchanges/ACR.svg', name: 'ACR', has_bot: false, currency: ['RUB', 'BYN', 'KZT', 'UAH'] },
		{ id: '5', image: 'https://nashgarant.me/assets/images/exchanges/PK.svg', name: 'PK', has_bot: false, currency: ['RUB', 'BYN', 'KZT', 'UAH'] },
		{ id: '6', image: 'https://nashgarant.me/assets/images/exchanges/RS.svg', name: 'RS', has_bot: false, currency: ['RUB', 'BYN', 'KZT', 'UAH'] },
	]

	transactioon = [
		{ id: 'ID1233', offer: 12, min: 1221, max: 312212, kurs: 1212, bank: "T-Bank" },
	]

	setActiveLogo(item: ILogo) {
		this.activeLogo = item;
		this.activeCurrency = item.currency[0];
	}

	setActiveCurrency(item: string) {
		this.activeCurrency = item;
	}

	changeToogleActiveButton(item: 'вывод' | 'депозит') {
		this.toogleactiveButton = item;
	}

	ngOnInit(): void {
		this.setActiveLogo(this.logoSection[0])
	}


	items: string[] = [
		'The first choice!',
		'And another choice for you.',
		'but wait! A third!'
	];

	onHidden(): void {
		console.log('Dropdown is hidden');
	}
	onShown(): void {
		console.log('Dropdown is shown');
	}
	isOpenChange(): void {
		console.log('Dropdown state is changed');
	}
}
