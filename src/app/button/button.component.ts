import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor() {}

  @Input() buttonHref: string;
  @Input() buttonText: string;

  ngOnInit() {}
}
