import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';

@Component({
  selector: 'hinv-root', // a component is a view, used by html tag name, see index.html <app-root> tag
  templateUrl: './app.component.html', // the actual html file being rendered
  styleUrls: ['./app.component.scss'] // the actual css file being used
})
export class AppComponent implements OnInit{

  @ViewChild('name', {static : true})
  name! : ElementRef;

  ngOnInit(): void {
    //this.name.nativeElement.innerText = 'Hilton Hotel';
  }

  constructor(private initService: InitService) { 
    console.log(initService.config);
  }

  // ngAfterViewInit(): void {
  //  if (this.vcr) {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  //  }
  // }
  title = 'hotelinventoryapp';

  // @ViewChild('user', {read :ViewContainerRef})
  // vcr? : ViewContainerRef;


}
