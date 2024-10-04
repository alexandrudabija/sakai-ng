import { Component, ElementRef, inject } from '@angular/core';
import { LayoutService } from "../../../@core/services/app.layout.service";
import { AppMenuComponent } from './menu/app.menu.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html',
    standalone: true,
    imports: [AppMenuComponent]
})
export class AppSidebarComponent {
    layoutService = inject(LayoutService);
    el = inject(ElementRef);
}

