import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ImprintRoutingModule } from './imprint-routing.module';
import { ImprintComponent } from './imprint.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ImprintRoutingModule
  ],
  declarations: [
    ImprintComponent
  ]
})
export class ImprintModule { }
