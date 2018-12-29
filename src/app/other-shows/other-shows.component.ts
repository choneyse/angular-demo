import { Component, Input, OnInit } from '@angular/core';

import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-other-shows',
  templateUrl: './other-shows.component.html',
  styleUrls: ['./other-shows.component.scss']
})
export class OtherShowsComponent implements OnInit {
  constructor(private showsService: ShowsService) {}
  @Input() shows: object;

  ngOnInit() {
    this.shows = this.showsService.getAllShows();
  }
}
