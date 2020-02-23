import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from 'protractor';

@Component({
  selector: 'st-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Output() sliderEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  openSlider() {
    this.sliderEvent.emit()
  }
}
