import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'results',
    loadChildren: () =>
      import('./results/results.module').then(m => m.ResultsModule),
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
