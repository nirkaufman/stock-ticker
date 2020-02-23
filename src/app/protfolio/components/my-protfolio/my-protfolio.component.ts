import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'st-my-protfolio',
  templateUrl: './my-protfolio.component.html',
  styleUrls: ['./my-protfolio.component.scss']
})
export class MyProtfolioComponent implements OnInit {

  @Input() title: string;
  @Input() label: string;


  constructor() { }

  ngOnInit(): void {
  }
  selectTime(item: SelectItem) {
    console.log(item);
  }
  get initSeconds(): Array<SelectItem> {
    return [{
      label: "30",
      value: 30
    },
    {
      label: "60",
      value: 60
    }, {
      label: "120",
      value: 120
    }, {
      label: "180",
      value: 180
    }]
  }
   initSock(): Array<Stock> {
    return [{
      stock: "BABA",
      price: "$14",
      volume: "$44",
      lastUpdate: 14
    },
    {
      stock: "BABA",
      price: "$14",
      volume: "$44",
      lastUpdate: 14
    },
    {
      stock: "BABA",
      price: "$14",
      volume: "$44",
      lastUpdate: 14
    },
    {
      stock: "BABA",
      price: "$14",
      volume: "$44",
      lastUpdate: 14
    }]
  }

}
