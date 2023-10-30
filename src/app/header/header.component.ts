import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hinv-root-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = 'Welcome to Hotel Inventory System!';

  constructor(private configService: ConfigService) { }

}
