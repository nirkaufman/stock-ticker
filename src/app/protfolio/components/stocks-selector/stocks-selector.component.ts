import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { StockEnum } from '../../enumerations/stock.enum';

@Component({
  selector: 'st-stocks-selector',
  templateUrl: './stocks-selector.component.html',
  styleUrls: ['./stocks-selector.component.scss']
})
export class StocksSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get initStock(): Array<SelectItem> {
    return [{
      label: StockEnum!.aap,
      value: StockEnum!.aap,
    },
    {
      label: StockEnum!.amzn,
      value: StockEnum!.amzn
    },
    {
      label: StockEnum!.appl,
      value: StockEnum!.appl
    },
    {
      label: StockEnum!.arna,
      value: StockEnum!.arna
    },
    {
      label: StockEnum!.baba,
      value: StockEnum!.baba
    },
    {
      label: StockEnum!.cabo,
      value: StockEnum!.cabo
    },
    {
      label: StockEnum!.cbs,
      value: StockEnum!.cbs
    },
    {
      label: StockEnum!.cldr,
      value: StockEnum!.cldr
    },
    {
      label: StockEnum!.data,
      value: StockEnum!.data
    },
    {
      label: StockEnum!.fb,
      value: StockEnum!.fb
    },
    {
      label: StockEnum!.laur,
      value: StockEnum!.laur
    },
    {
      label: StockEnum!.man,
      value: StockEnum!.man
    },
    {
      label: StockEnum!.nbix,
      value: StockEnum!.nbix
    },
    {
      label: StockEnum!.play,
      value: StockEnum!.play
    },
    {
      label: StockEnum!.sbgi,
      value: StockEnum!.sbgi
    },

    {
      label: StockEnum!.zen,
      value: StockEnum!.zen
    },

    {
      label: StockEnum!.zoes,
      value: StockEnum!.zoes
    }]
  }
}
