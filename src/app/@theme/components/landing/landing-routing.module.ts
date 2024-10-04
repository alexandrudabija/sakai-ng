import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', loadComponent: () => import('./landing.component').then(m => m.LandingComponent) }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
