import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/@core/services/app.layout.service';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    standalone: true,
    imports: [StyleClassModule, ButtonModule, DividerModule]
})
export class LandingComponent {

    constructor(public layoutService: LayoutService, public router: Router) { }

}
