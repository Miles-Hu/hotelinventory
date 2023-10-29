import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-root-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  email: string = '';
  password: string = '';

  constructor(private router : Router){}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      //this.router.navigate(['/rooms', 'add']);
      this.router.navigateByUrl('/rooms');
    } else {
      alert('login fail');
    }
  }

}
