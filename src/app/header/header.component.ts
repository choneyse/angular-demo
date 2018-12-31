import { Component } from '@angular/core';

@Component({
  selector: 'app-fat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}

  public navigateTo(event) {
    event.preventDefault();
    const href: string = event.target.href;
    const hash: string[] = href.split('#');
    // document.getElementById(hash[1]).scrollIntoView({
    //   behavior: 'smooth'
    // });
    const element = document.getElementById(hash[1]);
    window.scroll({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
    this.toggleMobileNav();
  }

  public toggleMobileNav() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.menu-toggle');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  }
}
