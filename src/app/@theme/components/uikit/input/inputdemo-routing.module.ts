import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./inputdemo.component').then(m => m.InputDemoComponent) }
	])],
	exports: [RouterModule]
})
export class InputDemoRoutingModule { }
