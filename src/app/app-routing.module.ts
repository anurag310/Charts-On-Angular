import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

const routes: Routes = [{
  path:'chart',
  component:DoughnutChartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
