import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../models/stock.model';
import { Http } from './http';
import { environment } from '../../../environments/environment';
import { RequestEnum } from '../enumerations/request.enum';

@Injectable({
  providedIn: 'root'
})
export class ProtfolioService {

  private url: string = environment.url;

  constructor(private httpClient: HttpClient) { }

  getStock(result: Http.OnResult<any, any>) {

    this.url += new Http.QueryString().add("function", "BATCH_STOCK_QUOTES")
      .add("symbols", "DATA,FB")
      .add("apikey","MJJOQ69Y676IMJWR")
      .build();
   
    this.httpClient.get(this.url).toPromise()
      .then(res => {
        result.onSuccess(RequestEnum.getStock, res)
      })
      .catch(err => {
        result.onError(RequestEnum.getStock, err)
      })
  }

}
