import { Component } from '@angular/core';

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
}
