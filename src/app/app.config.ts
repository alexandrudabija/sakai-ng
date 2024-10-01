import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { AuthInterceptor } from './@core/auth/auth.interceptor';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CustomerService } from './demo/service/customer.service';
import { CountryService } from './demo/service/country.service';
import { NodeService } from './demo/service/node.service';
import { IconService } from './demo/service/icon.service';
import { EventService } from './demo/service/event.service';
import { ProductService } from './demo/service/product.service';
import { PhotoService } from './demo/service/photo.service';
import { JwtModule } from '@auth0/angular-jwt';


const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);


export const appConfig: ApplicationConfig = {

  providers: [ provideRouter(routes, inMemoryScrollingFeature),
 provideZoneChangeDetection({ eventCoalescing: true }),
 provideAnimationsAsync(), provideHttpClient(withFetch(), withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    importProvidersFrom(BrowserAnimationsModule, JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
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
export function tokenGetter() {
  return ''
}