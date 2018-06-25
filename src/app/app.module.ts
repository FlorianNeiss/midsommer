import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImprintModule } from '@app/imprint/imprint.module';
import { StarsModule } from '@app/stars/stars.module';
import { UniversesModule } from '@app/universes/universesmodule';
import { CreateComponent } from './universes/create/create.component';
import { DetailComponent } from './universes/detail/detail.component';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    ImprintModule,
    StarsModule,
    UniversesModule,
    LoginModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, CreateComponent, DetailComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
