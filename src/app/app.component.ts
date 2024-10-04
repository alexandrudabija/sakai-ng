import {  AfterViewInit, Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';


@Component({
    selector: 'app-root',
    template:  `<router-outlet></router-outlet>`,
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit, AfterViewInit {

    constructor(private primengConfig: PrimeNGConfig) {


     }

    ngOnInit() :void{
        this.primengConfig.ripple = true;
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
