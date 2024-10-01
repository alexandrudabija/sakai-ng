// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1/website',
  apiContactsContactForm: 'http://localhost:3000/api/v1/website/contacts-contact-form',
  apiDialogContactForm: 'http://localhost:3000/api/v1/website/dialog-contact-form',
  apiStepper: 'http://localhost:3000/api/v1/website/stepper',
  apiServices: 'http://localhost:3000/api/v1/website/description-services',
  apiSignInSignUpFacebook: 'http://localhost:3000/api/v1/website/sign-in-sign-up-facebook',
  apiGetPoducts: 'http://localhost:3000/api/v1/website/products',
  apiMaintenanceService: 'http://localhost:3000/api/v1/website/maintenance-service',
  apiCheckout: 'http://localhost:3000/api/v1/website/checkout',


  apiGetUserOrdersById: 'http://localhost:3000/api/v1/website/users/user-orders/',
  apiSignUpLocal: 'http://localhost:3000/api/v1/website/users/sign-up-local',
  apiSignInLocal: 'http://localhost:3000/api/v1/website/users/sign-in-local',
  apiSignInGoogle: 'http://localhost:3000/api/v1/website/users/sign-in-google',
  apiSignUpGoogle: 'http://localhost:3000/api/v1/website/users/sign-up-google',
  apiCurrentUser: 'http://localhost:3000/api/v1/website/users/user/',

  FacebookLoginProviderProduction: '364643912909708',
  GoogleLoginProviderProduction: '620134236034-qep85fart1v02g360h7u0b85dkns88o2.apps.googleusercontent.com',
  TOKEN_ROUTE: '0',
  TOKEN_LocalStorage: 'pavel20'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
