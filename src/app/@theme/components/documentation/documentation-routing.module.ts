import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', loadComponent: () => import('./documentation.component').then(m => m.DocumentationComponent) }
    ])],
    exports: [RouterModule]
})
export class DocumentationRoutingModule { }
