import { Component } from '@angular/core';
import { fadeAnimation, fromLeft, featuredAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [featuredAnimation]
})
export class AppComponent {
  title = 'fat-angular';
}
