import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routing';
import { HOME_ROUTES } from './app/domain/home/home.routing';
import { environment } from './environments/environment';

const ROUTES = [...APP_ROUTES, ...HOME_ROUTES];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(ROUTES),
      NgxMaskModule.forRoot(),
      BrowserAnimationsModule
    ),
  ],
}).catch((err) => console.error(err));
