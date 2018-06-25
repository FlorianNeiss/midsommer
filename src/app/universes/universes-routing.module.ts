import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { UniversesComponent } from './universes.component';

const routes: Routes = [
  Route.withShell([
    { path: 'universes', component: UniversesComponent, data: { title: extract('Universes') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UniversesRoutingModule { }
