import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./filedemo.component').then(m => m.FileDemoComponent) }
	])],
	exports: [RouterModule]
})
export class FileDemoRoutingModule { }
