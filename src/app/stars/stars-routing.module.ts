import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { StarsComponent } from './stars.component';

const routes: Routes = [
  Route.withShell([
    { path: 'stars', component: StarsComponent, data: { title: extract('Stars') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StarsRoutingModule { }
