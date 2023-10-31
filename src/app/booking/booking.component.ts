import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      guestCount: [''],
    });
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }
}
