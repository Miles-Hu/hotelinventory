import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root', // a component is a view, used by html tag name, see index.html <app-root> tag
  templateUrl: './app.component.html', // the actual html file being rendered
  styleUrls: ['./app.component.scss'] // the actual css file being used
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
