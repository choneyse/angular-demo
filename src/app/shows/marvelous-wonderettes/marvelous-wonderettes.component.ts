import { Component, Input } from '@angular/core';
import { ShowsService } from '../../shows.service';

@Component({
  selector: 'app-marvelous-wonderettes',
  templateUrl: './marvelous-wonderettes.component.html',
  styleUrls: ['./marvelous-wonderettes.component.scss']
})
export class MarvelousWonderettesComponent {
  constructor(private showsService: ShowsService) {}

  @Input() show: object;
}
