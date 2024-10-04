import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./invalidstatedemo.component').then(m => m.InvalidStateDemoComponent) }
	])],
	exports: [RouterModule]
})
export class InvalidStateDemoRoutingModule { }
