import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StarsRoutingModule } from './stars-routing.module';
import { StarsComponent } from './stars.component';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TranslateModule,
    SharedModule,
    StarsRoutingModule
  ],
  declarations: [
    StarsComponent
  ]
})
export class StarsModule { }
