import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  @Input() addressData: any

  //Para a função ser executada, precisa que ela seja passada no constructor
  // constructor(){
  //   this.getAddressCompleted()
  // }

  // getDataString(){
  //   return this.address.street + this.address.zipCode
  // }

  // getAddressCompleted(){
  //   return console.log(this.address.street + ' ' + this.address.number + ' ' + this.address.zipCode)
  // }
}
