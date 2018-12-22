import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

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
  }
}
