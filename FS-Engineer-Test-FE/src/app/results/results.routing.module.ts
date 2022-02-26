import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsMainComponent } from "./results-main/results-main.component";

const ResultsRoutes: Routes = [
  {
    path: ':type',
    component: ResultsMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(ResultsRoutes)],
  exports: [RouterModule]
})

export class ResultsRoutingModule {}
