// import { Injectable} from '@angular/core';
// import { GoogleAnalyticsService } from 'ngx-google-analytics';

// @Injectable({
//   providedIn: 'root'
// })

// export class AnalyticsService {
//   // isBrowser: boolean;
//   constructor(private $gaService: GoogleAnalyticsService) {
//     // Feedbacks on https://github.com/maxandriani/ngx-google-analytics

//   }

//   // onUserInputName() {
   
//   //   this.$gaService.event('enter_name', 'user_register_form', 'Name');
//   // }

//   // onUserInputEmail() {
   
//   //   this.$gaService.event('enter_email', 'user_register_form', 'Email');
//   // }

//   // onSubmit() {
    
//   //   this.$gaService.event('submit', 'user_register_form', 'Enviar');
//   // }





//   // trackEvent(eventName: string, eventDetails: string, eventCategory: string) {
//   //   gtag('event', eventName, {
//   //     // event Type - example: 'SCROLL_TO_TOP_CLICKED'
//   //     'event_category': eventCategory,
//   //     // the label that will show up in the dashboard as the events name
//   //     'event_label': eventName,
//   //     // a short description of what happened
//   //     'value': eventDetails
//   //   })
//   // }



//   // trackPageViews() {
//   //   if (this.enabled) {
 


//   //       this.router.events.pipe(
//   //         filter((event) => event instanceof NavigationEnd),
//   //       )


//   //         .subscribe(() => {
//   //           gtag('send', { hitType: 'pageview', page: this.location.path() });
//   //         });
//   //     }
//   //   }
  
//   // trackEvent(eventName: string) {

//   //   if (this.enabled && this.isBrowser) {

//   //     // console.log(eventName);

//   //     ga('send', 'event', eventName);
//   //   }
//   // }


// }
