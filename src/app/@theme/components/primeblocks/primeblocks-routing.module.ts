import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', loadComponent: () => import('./blocks/blocks.component').then(m => m.BlocksComponent) }
    ])],
    exports: [RouterModule]
})
export class PrimeBlocksRoutingModule { }
