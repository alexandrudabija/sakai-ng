import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./overlaysdemo.component').then(m => m.OverlaysDemoComponent) }
	])],
	exports: [RouterModule]
})
export class OverlaysDemoRoutingModule { }
