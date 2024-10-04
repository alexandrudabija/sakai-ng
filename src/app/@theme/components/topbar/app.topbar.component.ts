import { Component, computed,  ElementRef, OnInit,  ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppConfig, LayoutService } from "../../../@core/services/app.layout.service";
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthService } from '../../../@core/auth/auth.service';
import { SlicePipe } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SearchInputComponent } from '../search-input/search-input.component';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    standalone: true,
    imports: [RouterLink, NgClass, SlicePipe, MenuModule, ButtonModule, SearchInputComponent]
})
export class AppTopBarComponent implements OnInit {

    items: MenuItem[] | undefined;

    userCredentials = computed(() => this.auth.currentUser());

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private auth: AuthService) { }

    ngOnInit(): void {

        // console.log(this.userCredentials());
        this.items = [
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        command: () => {
                            this.auth.logout();
                        }
                    }
                ]
            }
        ];
    }


    changeTheme(): void {
       
            // Obține configurația curentă
            const currentConfig = this.layoutService.config();
// console.log(currentConfig);

            // Schimbă între dark și light
             const newTheme = currentConfig.theme === 'lara-dark-indigo' ? 'lara-light-indigo' : 'lara-dark-indigo';
            const newColorScheme = currentConfig.colorScheme === 'dark' ? 'light' : 'dark';

        this.theme = newTheme;
        this.colorScheme = newColorScheme;
        
        
            // // Creează noua configurație
            // const config: AppConfig = {
            //     ripple: true,
            //     inputStyle: 'outlined',
            //     menuMode: 'static',
            //     colorScheme: newColorScheme,  // Actualizează schema de culori
            //     theme: newTheme,              // Schimbă tema
            //     scale: 14
            // };

            // // Actualizează configurația în serviciul Layout și emite schimbarea
            // this.layoutService.config.set(config);

            // // Schimbă tema efectivă folosind metoda existentă
            // this.layoutService.changeTheme();
      
    }
    // colorScheme(val: string) {
    //     this.layoutService.config.update((config) => ({
    //         ...config,
    //         colorScheme: val,
    //     }));
    // }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

   

}
