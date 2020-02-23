import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from 'events';

@Component({
  selector: 'st-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() display: boolean;
  @Output() hideEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onHide() {
    console.log("asd");
    this.hideEvent.emit()
  }
}
