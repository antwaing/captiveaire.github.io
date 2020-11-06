import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'captive-form';
  ccForm:FormGroup


  ngOnInit(): void {
    this.ccForm = new FormGroup({
      ccard: new FormControl('', [Validators.required, Validators.minLength(13)]),
      ccv2: new FormControl('', [Validators.required, Validators.min(100), Validators.max(9999)]),
      monthYear: new FormControl('', [Validators.required]),
    });
  }

  get ccard() { return this.ccForm.get('ccard'); }
  get ccv2() { return this.ccForm.get('ccv2'); }
  get monthYear() { return this.ccForm.get('monthYear'); }

  // Error functions. Would normally not be so repetitive in production code
  cCardError() {
    if (this.ccard.hasError('required')) {
      return 'Card Number Required';
    }
    if (this.ccard.hasError('minlength')) {
      return 'Card Number is too short';
    }
  }
  ccvError() {
    if (this.ccv2.hasError('required')) {
      return 'CCV Required';
    }
    if (this.ccv2.hasError('max')) {
      return 'Invalid CCV';
    }
  }
  monthYearError() {
    if (this.monthYear.hasError('required')) {
      return 'Date Required';
    }
  }
  // You can open console to see the form data when button is clicked
  onSubmit() {
    console.warn(this.ccForm.value);
  }
}
