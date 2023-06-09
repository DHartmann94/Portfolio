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

  /**
   * These functions are for validating and sending the contact field. 
   */
  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let formData = new FormData();

    this.disableInput(nameField, emailField, messageField, sendButton);
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

  /**
   * These functions are real-time validation.
   * @param inputType - name, email or message
   */
  blurVerify(inputType: string) {
    (inputType === 'name' || inputType === 'message') ? this.validNameOrMessage(inputType) : this.validEmail(inputType);
  }

  validNameOrMessage(inputType: string) {
    const inputField = (this as any)[inputType + 'Field'].nativeElement;
    inputField.value.length > 0 ? this.inputValid(inputType) : this.inputInvalid(inputType);
  }

  validEmail(inputType: string) {
    const inputField = (this as any)[inputType + 'Field'].nativeElement;
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputField.value) ? this.inputValid(inputType) : this.inputInvalid(inputType);
  }

  inputValid(inputType: string) {
    let selectedInputField = 'showErrorMessage' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    (this as any)[`${selectedInputField}`] = false;
    (this as any)[inputType + 'Field'].nativeElement.classList.add('valid-input');
  }

  inputInvalid(inputType: string) {
    let selectedInputField = 'showErrorMessage' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    (this as any)[inputType + 'Field'].nativeElement.classList.remove('valid-input');
    (this as any)[`${selectedInputField}`] = true;
  }


}