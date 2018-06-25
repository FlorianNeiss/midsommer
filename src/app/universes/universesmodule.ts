import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UniversesRoutingModule } from './universes-routing.module';
import { UniversesComponent } from './universes.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    UniversesRoutingModule
  ],
  declarations: [
    UniversesComponent
  ]
})
export class UniversesModule { }
