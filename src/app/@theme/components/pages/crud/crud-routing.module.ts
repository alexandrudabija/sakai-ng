import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./crud.component').then(m => m.CrudComponent) }
	])],
	exports: [RouterModule]
})
export class CrudRoutingModule { }
