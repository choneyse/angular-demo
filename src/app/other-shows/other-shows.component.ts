import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'other-shows',
  templateUrl: './other-shows.component.html',
  styleUrls: ['./other-shows.component.scss']
})
export class OtherShowsComponent implements OnInit {
  constructor() {}
  @Input() shows;

  ngOnInit() {}
}
