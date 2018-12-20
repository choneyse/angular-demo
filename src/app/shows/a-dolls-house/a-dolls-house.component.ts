import { Component, OnInit, Input } from '@angular/core';

import { ShowsService } from '../../shows.service';

@Component({
  selector: 'a-dolls-house',
  templateUrl: './a-dolls-house.component.html',
  styleUrls: ['./a-dolls-house.component.scss']
})
export class ADollsHouseComponent implements OnInit {
  constructor(private showsService: ShowsService) {}
  @Input() show;
  ngOnInit() {
    this.show = this.showsService.getShow(1);
  }
}
