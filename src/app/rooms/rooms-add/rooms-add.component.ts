import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-root-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  room : RoomList = {
    roomType: '',
    price: 0,
    checkinTime: new Date(),
    checkoutTime: new Date(),
    amenities: '',
    rating: 0,
    photos: '',
  }

  successMessage : string = '';

  constructor(private roomservice : RoomsService){}

  addRoom(ngForm : NgForm) {
    this.roomservice.addRoom(this.room).subscribe((response) => {
      this.successMessage = 'Room added successfully';
    });
    ngForm.resetForm({
      roomType: '',
      price: 0,
      checkinTime: new Date(),
      checkoutTime: new Date(),
      amenities: '',
      rating: 0,
      photos: '',
    });
  }
}
