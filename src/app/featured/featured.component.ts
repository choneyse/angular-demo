import { Component, OnInit, Input } from '@angular/core';
import { shows } from '../shows';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FatFeaturedComponent implements OnInit {
  constructor() {}
  @Input() show = shows;
  ngOnInit() {}
}
