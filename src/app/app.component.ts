import { Component } from '@angular/core';
import { shows } from './shows';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fat-angular';
  shows;
}
