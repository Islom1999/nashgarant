import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { AuthModalService } from './auth.modal.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  showModal = false;

  constructor(private modalService: AuthModalService) {}

  ngOnInit() {
    this.modalService.isModalOpen$.subscribe(isOpen => {
      this.showModal = isOpen;
    });
  }

  onClose() {
    this.modalService.closeModal();
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    const modalContent = document.querySelector('.modal-content');
    if (this.showModal && modalContent && !modalContent.contains(event.target as Node)) {
      this.onClose();
    }
  }
}