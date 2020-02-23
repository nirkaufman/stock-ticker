import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/protfolio/models/stock.model';

@Component({
  selector: 'st-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input() stock: Stock;

  constructor() { }

  ngOnInit(): void {
  }

}
