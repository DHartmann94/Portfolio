import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  language: string = '';


  constructor(public translate: TranslateService) {
    this.setLanguage();
  }

  /**
   * This method subscribes to the onLangChange event of the translate service (ngx-translate) to get the selected language.
   * The retrieved language is stored in the "language" variable.
   */
  setLanguage() {
    this.translate.onLangChange.subscribe((setLanguage: LangChangeEvent) => {
      this.language = setLanguage.lang;
    });
  }
}
