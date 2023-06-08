import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  showErrorMessageName: boolean = false;
  showErrorMessageEmail: boolean = false;
  showErrorMessageMessage: boolean = false;
  showSendMailMessage: boolean = false;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let formData = new FormData();

    this.disableInput(nameField, emailField, messageField, sendButton);
    // animation
    this.prepareTransmitMail(formData, nameField, emailField, messageField);
    await this.transmitMail(formData);
    this.clearInput(nameField, emailField, messageField);
    this.enableInput(nameField, emailField, messageField, sendButton);
    this.showsSendMailAnimation();
  }

  disableInput(nameField: any, emailField: any, messageField: any, sendButton: any) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }

  enableInput(nameField: any, emailField: any, messageField: any, sendButton: any) {
    setTimeout(() => {
      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;
    }, 3500);
  }

  clearInput(nameField: any, emailField: any, messageField: any) {
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }

  prepareTransmitMail(formData: any, nameField: any, emailField: any, messageField: any) {
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);
  }

  async transmitMail(formData: any) {
    // https://daniel-hartmann.developerakademie.net/send_mail/send_mail.php
    try {
      await fetch('https://daniel-hartmann.developerakademie.net/send_mail/send_mail.php',
        {
          method: 'Post',
          body: formData,
        });
    } catch (error) {
      console.log('An error has occurred: ', error);
    }
  }

  showsSendMailAnimation() {
    this.showSendMailMessage = true;
    setTimeout(() => {
      this.showSendMailMessage = false;
    }, 3000);
  }


}