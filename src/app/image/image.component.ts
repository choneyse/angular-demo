import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fat-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  constructor() {}

  @Input() imgClass;
  @Input() imgSrc;
  @Input() altTxt;

  ngOnInit() {}
}
