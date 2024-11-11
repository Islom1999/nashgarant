import { Component } from '@angular/core';
import { AuthModalService } from '../../../auth/auth.modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeButton = 'all';

  setActiveButton(button: string) {
    this.activeButton = button;
  }

  constructor(private modalService: AuthModalService) {}

  openModal() {
    this.modalService.openModal();
  }
}
