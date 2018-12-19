import { Component, OnInit, Input } from '@angular/core';

import { ShowsService } from '../shows.service';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FatFeaturedComponent implements OnInit {
  constructor(private showsService: ShowsService) {}
  @Input() show;
  ngOnInit() {
    this.show = this.showsService.getShow(0);
  }
}
