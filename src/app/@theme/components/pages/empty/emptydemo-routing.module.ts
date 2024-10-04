import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', loadComponent: () => import('./emptydemo.component').then(m => m.EmptyDemoComponent) }
    ])],
    exports: [RouterModule]
})
export class EmptyDemoRoutingModule { }
