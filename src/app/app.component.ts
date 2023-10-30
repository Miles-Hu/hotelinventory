import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

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
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log(event);
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log(event);
    });
  }

  constructor(private initService: InitService,
    private configService: ConfigService,
    private router: Router) { 
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
