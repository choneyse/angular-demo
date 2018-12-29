import { Component, OnInit, Input } from '@angular/core';
import { ShowsService } from '../../shows.service';

@Component({
  selector: 'marvelous-wonderettes',
  templateUrl: './marvelous-wonderettes.component.html',
  styleUrls: ['./marvelous-wonderettes.component.scss']
})
export class MarvelousWonderettesComponent implements OnInit {
  constructor(private showsService: ShowsService) {}

  @Input() show: object;

  ngOnInit() {
    this.show = this.showsService.getShow(2);
  }
}
