import { Location } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { bankData, sbpBankData } from '../../shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-withdrawal',
	templateUrl: './withdrawal.component.html',
	styleUrl: './withdrawal.component.scss'
})
export class WithdrawalComponent implements OnInit {
	activeLogo!: any
	activeCurrency!: string
	bankData = bankData
	sbpBankData = sbpBankData
	activeBank: any
	activeSbpBank: any
	cardForm!: FormGroup

	logoSection = [
		{ id: '1', image: 'https://nashgarant.me/assets/images/exchanges/POK.svg', name: 'ПокерОК', has_bot: true, currency: ['RUB', 'BYN', 'KZT',], bot: { deposit: 1222, withdraw: 1221, min: 1212, max: 1212112, time: "5-10 min", link: 'https://t.me/luxonobmenbot' } },
		{ id: '2', image: 'https://nashgarant.me/assets/images/exchanges/LUX.svg', name: 'Luxon', has_bot: true, currency: ['RUB', 'BYN', 'KZT', 'UAH'], bot: { deposit: 1222, withdraw: 1221, min: 1212, max: 1212112, time: "5-10 min", link: 'https://t.me/luxonobmenbot' } },
		{ id: '3', image: 'https://nashgarant.me/assets/images/exchanges/GG.svg', name: 'GGPoker', has_bot: false, currency: ['UAH', 'RUB', 'BYN', 'KZT',] },
		{ id: '4', image: 'https://nashgarant.me/assets/images/exchanges/ACR.svg', name: 'ACR Poker', has_bot: false, currency: ['RUB', 'BYN', 'KZT', 'UAH'] },
		{ id: '5', image: 'https://nashgarant.me/assets/images/exchanges/PK.svg', name: 'PokerKing', has_bot: false, currency: ['RUB', 'BYN', 'KZT', 'UAH'] },
		{ id: '6', image: 'https://nashgarant.me/assets/images/exchanges/RS.svg', name: 'RedStar', has_bot: false, currency: ['RUB', 'BYN', 'KZT', 'UAH'] },
	]
	constructor(private location: Location) { }

  options = ['Option 1', 'Option 2', 'Option 3'];
  selectedOption: string | null = null;

  onSelectionChange(option: string) {
    this.selectedOption = option;
    console.log('Tanlangan variant:', option);
  }


	ngOnInit(): void {
		this.selectOption1(this.logoSection[0].name)
		this.selectOption3(this.bankData[0].name)
		this.selectOption4(this.sbpBankData[0].name)
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

	dropdownOpen3 = false;

	toggleDropdown3() {
		this.dropdownOpen3 = !this.dropdownOpen3;
		this.dropdownOpen1 = false;
		this.dropdownOpen2 = false;
	}

	selectOption3(option: string) {
		this.activeBank = this.bankData.find(o => o.name === option);
	}

	dropdownOpen4 = false;

	toggleDropdown4() {
		this.dropdownOpen4 = !this.dropdownOpen4;
		this.dropdownOpen1 = false;
		this.dropdownOpen2 = false;
		this.dropdownOpen3 = false;
	}

	selectOption4(option: string) {
		this.activeSbpBank = this.sbpBankData.find(o => o.name === option);
	}

	@HostListener('document:click', ['$event'])
	handleOutsideClick(event: Event) {
		const target = event.target as HTMLElement;
		if (!target.closest('.custom-select')) {
			this.dropdownOpen1 = false;
			this.dropdownOpen2 = false;
			this.dropdownOpen3 = false;
			this.dropdownOpen4 = false;
		}
	}

	maxMountVal!: number | null;
	maxBtn: string = 'Максимум';

	maxMount(inputElement: HTMLInputElement) {
		if (this.maxMountVal === null || this.maxMountVal === undefined) {
			this.maxMountVal = this.activeBank.refill_max_amount;
			this.maxBtn = 'Очистить';
		} else {
			this.maxMountVal = null;
			this.maxBtn = 'Максимум';
			inputElement.focus();
		}
	}
}
