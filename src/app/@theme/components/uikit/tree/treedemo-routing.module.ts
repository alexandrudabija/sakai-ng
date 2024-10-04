import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./treedemo.component').then(m => m.TreeDemoComponent) }
	])],
	exports: [RouterModule]
})
export class TreeDemoRoutingModule { }
