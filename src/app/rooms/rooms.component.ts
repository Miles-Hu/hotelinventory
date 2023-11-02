import { Component, DoCheck, ViewChild, ViewChildren,OnInit, AfterViewInit, QueryList, OnDestroy } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-root-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy{
  ngAfterViewInit(): void {
    console.log(this.headerComponent); // triggered after the view being initialized
    if (this.headerComponent) {
      //this.headerComponent.title = 'Welcome to Hotel Inventory System!!!';
    }
    console.log(this.headerComponents);
    if (this.headerComponents) {
      const lastHeader = this.headerComponents.last;
      if (lastHeader) {
        //lastHeader.title = 'This is the last header component!!!';
      }
      const secondHeader = this.headerComponents.get(1);
      if (secondHeader) {
        //secondHeader.title = 'This is the second header component!!!';
      }
    }
  }

  subscription?: Subscription;

  ngOnInit(): void {
    console.log(this.headerComponent); // undefined, because it's not being initialized yet
    this.roomsService.getRooms$.subscribe((roomList) => {
      this.roomList = roomList;
    });

    this.stream.subscribe((user) => {
      console.log(user);
    });

    this.subscription = this.stream.subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });

    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('sent');
          break;
        case HttpEventType.UploadProgress:
          console.log('upload progress');
          break;
        case HttpEventType.ResponseHeader:
          console.log('response header');
          break;
        case HttpEventType.DownloadProgress:
          console.log('download progress');
          break;
        case HttpEventType.Response:
          console.log('response');
          break;
        default:
          console.log('done');
          break;
      }
      console.log(event);
    });

  }
  ngDoCheck(): void {
    console.log("Do check is called!");
  }

  // 1. interpolation
  // used for simple data type
  hotelName = 'Hilton Hotel';

  // 2. property binding
  // only for valid html tags
  numberOfRooms = 10;

  // 3 event binding
  // user triggers an event, then we make actions
  hideNumOfRooms = false;

  title = 'Room List'

  // used to test ngif Directive, use ngif to replace hidden
  // as its performance is better
  rooms? : Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5
  }  

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      this.error$.next(err.message);
      return of([]);
    })
  );

  numOfRooms$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  );

  @ViewChild(HeaderComponent)
  headerComponent? : HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerComponents? : QueryList<HeaderComponent>;

  roomList: RoomList[] = []

  selectedRoom? : RoomList;

  priceFilter: FormControl = new FormControl('');

  constructor(private roomsService: RoomsService,
    private configService: ConfigService) {

  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); // release resource
    }
  }

  toggle() {
    this.hideNumOfRooms = !this.hideNumOfRooms;
    this.title = 'Rooms List';
  }


  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room : RoomList =     {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.45654,
    };
    this.roomsService.addRoom(room).subscribe((rooms) => {
      this.roomList = rooms;
    });
    console.log(this.roomList);
  }

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });


  editRoom() {
    const room : RoomList =     {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.45654,
    };

    this.roomsService.editRoom(room).subscribe((rooms) => {
      this.roomList = rooms;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((rooms) => {
      this.roomList = rooms;
    });
  }

}
