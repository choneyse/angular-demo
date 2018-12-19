import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShowsService } from '../shows.service';

const getShowId = titleFromUrl => {
  console.log('titleFromUrl', titleFromUrl);
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
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  constructor(private showsService: ShowsService, private activatedRoute: ActivatedRoute) {}
  @Input() show;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (!params['show']) {
        this.show = this.showsService.getShow(0);
      } else {
        console.log('id:', getShowId(params['show']));
        const showId = getShowId(params['show']);
        this.show = this.showsService.getShow(showId);
      }
    });
  }
}
