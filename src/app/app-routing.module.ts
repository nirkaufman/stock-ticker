import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtfolioComponent } from './protfolio/protfolio.component';


const routes: Routes = [
  {
    path: 'protfolio',
    component: ProtfolioComponent
  },
  {
    path: '',
    redirectTo: '/protfolio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
