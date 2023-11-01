import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(private configService: ConfigService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl(
        { value: '2', disabled: true },
        { validators: [Validators.required] }
      ),
      guestEmail: ['', [Validators.required, Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', { updateOn: 'blur' }],
      guestName: ['', { updateOn: 'blur', Validators: [Validators.required, Validators.minLength(5)] }],
      address: this.fb.group({
        addressLine1: ['', Validators.required],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        this.fb.group({ guestName: ['', Validators.required], age: new FormControl('') }),
      ]),
      TnC: new FormControl(false, Validators.requiredTrue)
    }, { updateOn: 'blur' });
    this.getBookingData();

    this.bookingForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  getBookingData() {
    //this.bookingForm.setValue({
    this.bookingForm.patchValue({
      roomId: '2',
      guestEmail: 'test@test.com',
      checkinDate: new Date(),
      //checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: 'Miles',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      TnC: false
    });
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      TnC: false
    });
  }

  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('') })
    );
  }

  addPassport() {
    this.bookingForm.addControl('passportNumber', new FormControl('pass123'));
  }

  deletePassport() {
    this.bookingForm.removeControl('passportNumber');
  }

  deleteGuest(index: number) {
    this.guests.removeAt(index);
  }
}
