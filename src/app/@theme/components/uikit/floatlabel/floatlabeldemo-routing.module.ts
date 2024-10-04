import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./floatlabeldemo.component').then(m => m.FloatLabelDemoComponent) }
	])],
	exports: [RouterModule]
})
export class FloatlabelDemoRoutingModule { }
