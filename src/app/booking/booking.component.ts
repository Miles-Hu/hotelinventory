import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'hinv-root-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  // GitHub Copilot: In TypeScript, the `!`
  // post-fix expression operator is used to assert that its preceding
  // variable is non-null and non-undefined. This means that you're telling TypeScript to trust
  // that this variable will always have a value and it will never be `null` or `undefined`.
  bookingForm!: FormGroup;

  get guests() {
    // In TypeScript, the `get` keyword is used to define a getter method.
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private configService: ConfigService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        this.fb.group({ guestName: [''], age: new FormControl('') }),
      ]),
    });
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }

  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('') })
    );
  }
}
