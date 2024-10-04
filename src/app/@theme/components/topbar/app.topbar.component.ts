import { Component, computed, effect, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "../../../@core/services/app.layout.service";
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthService } from '../../../@core/auth/auth.service';
import { SlicePipe } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    standalone: true,
    imports: [RouterLink, NgClass, SlicePipe, MenuModule, ButtonModule,]
})
export class AppTopBarComponent implements OnInit {

    items: MenuItem[] | undefined;

    userCredentials = computed(() => this.auth.currentUser());

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private auth: AuthService) { }

    ngOnInit(): void {

        console.log(this.userCredentials());
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
}
