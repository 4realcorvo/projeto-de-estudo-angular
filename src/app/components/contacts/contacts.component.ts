import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @Output() sendForma = new EventEmitter<object>()

  disabledButton = true;
  contactInfo = {
    email: '',
    message: ''
  }

  constructor(){
    setTimeout(() => {
      this.disabledButton = false;
    }, 2000)
  }

  disabledButtonFunction(){
    return !this.disabledButton
  }

  submitForm(){
    // console.log('O Email: ' + this.contactInfo.email + ' A Mensagem: ' + this.contactInfo.message)

    this.sendForma.emit(this.contactInfo)
  }
}
