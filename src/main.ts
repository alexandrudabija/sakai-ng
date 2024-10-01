import { enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CountryService } from './app/demo/service/country.service';
import { CustomerService } from './app/demo/service/customer.service';
import { EventService } from './app/demo/service/event.service';
import { IconService } from './app/demo/service/icon.service';
import { NodeService } from './app/demo/service/node.service';
import { PhotoService } from './app/demo/service/photo.service';
import { ProductService } from './app/demo/service/product.service';
import { AppRoutingModule } from './app/app-routing.module';
import { AppLayoutModule } from './app/layout/app.layout.module';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule, AppLayoutModule),
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
    ]
})
  .catch(err => console.error(err));
