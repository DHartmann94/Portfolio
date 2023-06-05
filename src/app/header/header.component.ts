import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  germanLanguage = false;
  flagSource = 'assets/img/flags/german_flag.png';
  

  /**
   * Translate tool (ngx-translate)
   * @param {String} translate - Variable to be translated.
   */
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }

  /**
   * Toggles the language between english and german.
   * Updates the flag source based on the selected language.
   */
  toggleLanguage() {
    this.germanLanguage = !this.germanLanguage;
    this.translate.use(this.germanLanguage ? 'de' : 'en');
    this.flagSource = this.germanLanguage ? 'assets/img/flags/english_flag.png' : 'assets/img/flags/german_flag.png';
  }
}
