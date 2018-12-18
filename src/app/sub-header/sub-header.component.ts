import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class FatSubHeaderComponent implements OnInit {
  @Input() sectionTitle;
  ngOnInit() {}
}
