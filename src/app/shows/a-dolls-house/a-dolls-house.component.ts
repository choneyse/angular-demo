import { Component, Input } from '@angular/core';

import { ShowsService } from '../../shows.service';

@Component({
  selector: 'app-a-dolls-house',
  templateUrl: './a-dolls-house.component.html',
  styleUrls: ['./a-dolls-house.component.scss']
})
export class ADollsHouseComponent {
  constructor(private showsService: ShowsService) {}
  @Input() show: object;
}
