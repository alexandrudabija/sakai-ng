import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', loadComponent: () => import('./timelinedemo.component').then(m => m.TimelineDemoComponent) }
    ])],
    exports: [RouterModule]
})
export class TimelineDemoRoutingModule { }
