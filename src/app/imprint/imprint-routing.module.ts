import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ImprintComponent } from './imprint.component';

const routes: Routes = [
  Route.withShell([
    { path: 'imprint', component: ImprintComponent, data: { title: extract('Imprint') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ImprintRoutingModule { }
