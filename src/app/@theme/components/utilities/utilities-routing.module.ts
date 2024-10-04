import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'icons', data: { breadcrumb: 'Prime Icons' }, loadComponent: () => import('./icons/icons.component').then(m => m.IconsComponent) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
