import { Component, Input, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-fat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() buttonHref;
  @Input() buttonText;

  ngOnInit() {}
}
