import { Component, OnInit, Input } from '@angular/core';

import { ShowsService } from '../../shows.service';

@Component({
  selector: 'app-beyond-the-rainbow',
  templateUrl: './beyond-the-rainbow.component.html',
  styleUrls: ['./beyond-the-rainbow.component.scss']
})
export class BeyondTheRainbowComponent {
  constructor(private showsService: ShowsService) {}
  @Input() show: object;
}
