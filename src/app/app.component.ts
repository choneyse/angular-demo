import { Component } from '@angular/core';
import { featuredAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [featuredAnimation]
})
export class AppComponent {
  title = 'fat-angular';

  onActivate(event: any) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 100);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
