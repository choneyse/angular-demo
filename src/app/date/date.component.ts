import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  constructor() {}

  @Input() startDate: number;
  @Input() endDate: number;

  ngOnInit() {}
}
