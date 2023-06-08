import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentImage: string = 'assets/img/icons/arrow_up.png';
  normalImage: string = 'assets/img/icons/arrow_up.png';
  hoveredImage: string = 'assets/img/icons/arrow_up_green.png';

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
