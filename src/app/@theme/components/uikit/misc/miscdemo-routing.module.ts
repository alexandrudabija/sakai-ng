import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./miscdemo.component').then(m => m.MiscDemoComponent) }
	])],
	exports: [RouterModule]
})
export class MiscDemoRoutingModule { }
