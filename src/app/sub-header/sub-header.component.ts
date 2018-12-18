import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fat-sub-header',
  templateUrl: './fat-sub-header.component.html',
  styleUrls: ['./fat-sub-header.component.scss']
})
export class FatSubHeaderComponent implements OnInit {
  @Input() sectionTitle;
  ngOnInit() {}
}
