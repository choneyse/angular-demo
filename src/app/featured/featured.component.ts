import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShowsService } from '../shows.service';
import { fromLeft, fromRight } from '../animations/animations';

const getShowId = titleFromUrl => {
  switch (titleFromUrl) {
    case 'beyond-the-rainbow':
      return 0;
    case 'a-dolls-house-part-2':
      return 1;
    case 'marvelous-wonderettes-dream-on':
      return 2;
  }
};

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  animations: [fromLeft, fromRight]
})
export class FeaturedComponent implements OnInit {
  constructor(private showsService: ShowsService, private activatedRoute: ActivatedRoute) {}
  show: object;
  @Input() showId: number;
  ngOnInit() {
    this.show = this.showsService.getShow(this.showId);
  }
}
