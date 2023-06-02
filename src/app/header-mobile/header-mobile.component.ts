import { Component } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleOverflowOnBody();
  }

  toggleOverflowOnBody() {
    const body = document.body;
    body.style.overflow === "hidden" ? body.style.overflow = "unset" : body.style.overflow = "hidden";
  }
}
