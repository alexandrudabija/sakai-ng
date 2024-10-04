import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./panelsdemo.component').then(m => m.PanelsDemoComponent) }
	])],
	exports: [RouterModule]
})
export class PanelsDemoRoutingModule { }
