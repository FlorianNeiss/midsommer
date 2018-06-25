import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UniversesRoutingModule } from './universes-routing.module';
import { UniversesComponent } from './universes.component';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TranslateModule,
    SharedModule,
    UniversesRoutingModule
  ],
  declarations: [
    UniversesComponent
  ]
})
export class UniversesModule { }
