import { Injectable, Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICES_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { localStorageToken } from 'src/app/localstorage.token';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root', // this is the default value, we can remove it
})
export class RoomsService {
  roomList: RoomList[] = [];

  headers = new HttpHeaders({'token': 'Miles token', 'test': 'test'});
  getRooms$ = this.httpClient.get<RoomList[]>('/api/rooms', {
    headers: this.headers,
  }).pipe(
    shareReplay(1) // shareReplay(1) means only cache the latest value
  );

  constructor(
    @Inject(APP_SERVICES_CONFIG) private config: AppConfig,
    @Inject(localStorageToken) private localStorage: Storage,
    private httpClient: HttpClient
  ) {
    console.log('RoomsService is created!!!');
    console.log(config.apiEndpoint);
    localStorage.setItem('name', 'Miles first token');
  }

  getRoomList() {
    return this.httpClient.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.httpClient.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.httpClient.put<RoomList[]>(
      `/api/rooms/${room.roomNumber}`,
      room
    );
  }

  deleteRoom(id: string) {
    return this.httpClient.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  // request example
  // the above 4 methods are all shortcuts for the request method
  // if we need more details about httpResponse, we can use request method
  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportprogress: true,
      }
    );
    return this.httpClient.request(request);
  }
}
