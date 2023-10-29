import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-root-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit{

  id : string = '';

  id$? : Observable<string | null>;

  constructor(private router : ActivatedRoute){}

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
    // this.router.params.subscribe((params) => {
    //   this.id = params['id'];
    // });
    //this.id$ = this.router.params.pipe(map((params) => params['id']));
    this.id$ = this.router.paramMap.pipe(map((params) => params.get('id')));
  }

}
