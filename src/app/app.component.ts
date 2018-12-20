import { Component } from '@angular/core';
import { fadeAnimation, fromLeft } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fromLeft]
})
export class AppComponent {
  title = 'fat-angular';
}
