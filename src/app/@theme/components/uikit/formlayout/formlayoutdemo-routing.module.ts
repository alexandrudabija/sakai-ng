import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./formlayoutdemo.component').then(m => m.FormLayoutDemoComponent) }
	])],
	exports: [RouterModule]
})
export class FormLayoutDemoRoutingModule { }
