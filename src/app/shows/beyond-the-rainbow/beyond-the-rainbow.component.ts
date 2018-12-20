import { Component, OnInit, Input } from '@angular/core';

import { ShowsService } from '../../shows.service';
import { fadeAnimation } from 'src/app/animations';

@Component({
  selector: 'beyond-the-rainbow',
  templateUrl: './beyond-the-rainbow.component.html',
  styleUrls: ['./beyond-the-rainbow.component.scss']
})
export class BeyondTheRainbowComponent implements OnInit {
  constructor(private showsService: ShowsService) {}
  @Input() show;
  ngOnInit() {
    // this.show = this.showsService.getShow(0);
  }
}
