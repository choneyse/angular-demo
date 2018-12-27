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
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 25);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
    document.querySelector('nav').classList.remove('open');
    document.querySelector('.menu-toggle').classList.remove('open');
  }
}
