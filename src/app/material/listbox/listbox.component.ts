import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'st-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent implements OnInit {

  @Input() items: SelectItem[];
  @Input() selected: string;

  constructor() { }

  ngOnInit(): void {
  }

}
