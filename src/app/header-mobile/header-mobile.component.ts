import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  @Input() header!: HeaderComponent; // To access the toggleLanguage function and flagSource variable.
  isMenuOpen: boolean = false;

  /**
   * Toggles the menu open or closed.
   * Updates the overflow property of the body element accordingly.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleOverflowOnBody();
  }

  toggleOverflowOnBody() {
    const body = document.body;
    body.style.overflow === "hidden" ? body.style.overflow = "unset" : body.style.overflow = "hidden";
  }
}
