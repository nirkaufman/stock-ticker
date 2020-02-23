import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtfolioComponent } from './protfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { MyProtfolioComponent } from './components/my-protfolio/my-protfolio.component';
import { StocksSelectorComponent } from './components/stocks-selector/stocks-selector.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProtfolioService } from './services/protfolio.service';


@NgModule({
  declarations: [
    ProtfolioComponent,
    HeaderComponent,
    MyProtfolioComponent,
    StocksSelectorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    ProtfolioService
  ],
  exports: [
    ProtfolioComponent,
    CommonModule
  ]
})
export class ProtfolioModule { }
