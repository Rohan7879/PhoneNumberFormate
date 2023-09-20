import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  phoneNumber: string = '';

  numberFormate() {
    const cleanNumber = this.phoneNumber.replace(/\D/g, '');

    if (cleanNumber.length >= 10) {
      const logic = `(${cleanNumber.slice(0, 3)})-${cleanNumber.slice(
        3,
        6
      )}-${cleanNumber.slice(6, 10)}`;
      this.phoneNumber = logic;
    } else {
      alert('Please enter valid number');
    }
  }
}
