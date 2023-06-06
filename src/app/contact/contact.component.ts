import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  currentImage: string = 'assets/img/icons/arrow_up.png';
  normalImage: string = 'assets/img/icons/arrow_up.png';
  hoveredImage: string = 'assets/img/icons/arrow_up_green.png';

  sendMail() {
    console.log('TEST');
  }
}
