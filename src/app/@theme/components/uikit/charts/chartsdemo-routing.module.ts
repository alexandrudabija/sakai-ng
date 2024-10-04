import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./chartsdemo.component').then(m => m.ChartsDemoComponent) }
	])],
	exports: [RouterModule]
})
export class ChartsDemoRoutingModule { }
