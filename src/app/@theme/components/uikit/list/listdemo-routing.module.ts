import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./listdemo.component').then(m => m.ListDemoComponent) }
	])],
	exports: [RouterModule]
})
export class ListDemoRoutingModule { }
