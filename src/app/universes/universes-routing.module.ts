import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { UniversesComponent } from './universes.component';
import { CreateComponent } from '@app/universes/create/create.component';
import { DetailComponent } from '@app/universes/detail/detail.component';

const routes: Routes = [
  Route.withShell([
    { path: 'universes', component: UniversesComponent, data: { title: extract('Universes') } },
    { path: 'universes/create', component: CreateComponent, data: { title: extract('Universes/Create') } },
    { path: 'universes/detail/:id', component: DetailComponent, data: { title: extract('Universes/Detail') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UniversesRoutingModule { }
