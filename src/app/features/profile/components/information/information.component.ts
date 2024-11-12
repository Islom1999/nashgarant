import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-information',
	templateUrl: './information.component.html',
	styleUrl: './information.component.scss'
})
export class InformationComponent {
	saveUsername: boolean = false;
	saveUsernameFN(input?: HTMLInputElement) {
		if (!this.saveUsername && input!.value) {
			this.showModal = true;
		} else {
			input!.focus()
		}
		if (this.saveUsername === true) {

		}
	}
	userSuccess(input?: HTMLInputElement) {
		if (this.showModal && input!.value) {
			input!.disabled = true;
			this.showModal = false;
			this.saveUsername = true
		}
	}
	sendCode() {

	}


	showModal = false;
	onClose() {
		this.showModal = false;
	}

	@HostListener('document:click', ['$event'])
	onOutsideClick(event: MouseEvent) {
		const modalContent = document.querySelector('.modal-content');
		if (this.showModal && modalContent && !modalContent.contains(event.target as Node)) {
			this.onClose();
		}
	}
}
