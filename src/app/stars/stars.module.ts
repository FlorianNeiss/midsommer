import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StarsRoutingModule } from './stars-routing.module';
import { StarsComponent } from './stars.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    StarsRoutingModule
  ],
  declarations: [
    StarsComponent
  ]
})
export class StarsModule { }
