import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./tabledemo.component').then(m => m.TableDemoComponent) }
	])],
	exports: [RouterModule]
})
export class TableDemoRoutingModule { }
