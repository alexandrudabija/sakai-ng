import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { AuthInterceptor } from './@core/auth/security/auth.interceptor';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { JwtModule } from '@auth0/angular-jwt';
import { EventService } from './@core/services/event.service';
import { CountryService } from './@core/services/country.service';
import { CustomerService } from './@core/services/customer.service';
import { IconService } from './@core/services/icon.service';
import { NodeService } from './@core/services/node.service';
import { PhotoService } from './@core/services/photo.service';
import { ProductService } from './@core/services/product.service';


const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);


export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes, inMemoryScrollingFeature),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideAnimationsAsync(), provideHttpClient(withFetch(), withInterceptorsFromDi()),
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  importProvidersFrom(BrowserAnimationsModule, JwtModule.forRoot({
    config: {
      tokenGetter: () => '',
      // allowedDomains: ["example.com"],
      // disallowedRoutes: ["http://example.com/examplebadroute/"],
    },
  })),
  { provide: LocationStrategy, useClass: PathLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ]
};
