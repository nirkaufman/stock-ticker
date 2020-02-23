import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'st-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnChanges {


  @Input() items: SelectItem[];
  @Input() itemSelected: number;

  @Output() selectEvent = new EventEmitter();
  selected: number;

  constructor() {

  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.selected = this.itemSelected;
  }
  onSelect(item: SelectItem) {
    this.selectEvent.emit(item)
  }
}
