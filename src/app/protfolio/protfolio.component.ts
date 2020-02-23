import { Component, OnInit } from '@angular/core';
import { ProtfolioService } from './services/protfolio.service';
import { Http } from './services/http';

@Component({
  selector: 'st-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.scss']
})
export class ProtfolioComponent implements OnInit, Http.OnResult<any, any> {

  displaySlider: boolean = false;
  
  constructor(private service: ProtfolioService) { }

  ngOnInit(): void {
    this.service.getStock(this);
  }

  onLoad(apiName?: string): void {
   
  }
  onSuccess(apiName?: string, data?: any): void {
   console.log(data);
  }
  onError(apiName?: string, error?: any): void {
   
  }
}
