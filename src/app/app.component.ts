import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';
import { AppConfig, LayoutService } from './@core/services/app.layout.service';


@Component({
    selector: 'app-root',
    template:  `<router-outlet></router-outlet>`,
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit, AfterViewInit {
    private primengConfig = inject(PrimeNGConfig);
    private layoutService = inject(LayoutService);


    ngOnInit() :void{
       this.primengConfig.ripple = true;
        // const config: AppConfig = {
        //     ripple: true,                      //toggles ripple on and off
        //     inputStyle: 'outlined',             //default style for input elements
        //     menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
        //     colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
        //     theme: 'lara-light-indigo',         //default component theme for PrimeNG
        //     scale: 14                           //size of the body font size to scale the whole application
        // };
        // this.layoutService.config.set(config);
    }

    ngAfterViewInit(): void {
        timer(500).subscribe(() => {
            this.hideSpinner();
        });
    }

    hideSpinner(): void {
        const spinner = document.getElementById('nb-global-spinner');
        if (spinner) {
            spinner.style.display = 'none'; // Ascunde spinner-ul
        }
    }
 
}
