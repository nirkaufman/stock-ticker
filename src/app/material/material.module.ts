import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { StockCardComponent } from './stock-card/stock-card.component';
import { CardModule } from 'primeng/card';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { ListboxComponent } from './listbox/listbox.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  declarations: [
    DropdownComponent,
    StockCardComponent,
    ListboxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    CardModule,
    ButtonModule,
    ListboxModule,
    SidebarModule
  ],
  exports: [
    DropdownComponent,
    StockCardComponent,
    ListboxComponent,
    SidebarComponent
  ]
})
export class MaterialModule { }
