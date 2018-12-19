import { Component, Input, OnInit } from '@angular/core';

import { ShowsService } from '../shows.service';

@Component({
  selector: 'other-shows',
  templateUrl: './other-shows.component.html',
  styleUrls: ['./other-shows.component.scss']
})
export class OtherShowsComponent implements OnInit {
  constructor(private showsService: ShowsService) {}
  @Input() shows;

  ngOnInit() {
    this.shows = this.showsService.getAllShows();
  }
}
