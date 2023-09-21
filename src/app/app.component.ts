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

    switch (cleanNumber.length) {
      case 3:
        const logic = `(${cleanNumber.slice(0, 3)})-${cleanNumber.slice(3, 6)}`;
        this.phoneNumber = logic;
        break;
      case 6:
        const logic1 = `(${cleanNumber.slice(0, 3)})-${cleanNumber.slice(
          3,
          6
        )}-${cleanNumber.slice(6, 10)}`;
        this.phoneNumber = logic1;
        break;
    }

    // if (cleanNumber.length >= 3) {
    //   const logic = `(${cleanNumber.slice(0, 3)})-${cleanNumber.slice(3, 6)}`;
    //   this.phoneNumber = logic;
    // } else if (cleanNumber.length >= 6) {
    //   const logic = `(${cleanNumber.slice(0, 3)})-${cleanNumber.slice(
    //     3,
    //     6
    //   )}-${cleanNumber.slice(6, 10)}`;
    //   this.phoneNumber = logic;
    // }
  }
}
