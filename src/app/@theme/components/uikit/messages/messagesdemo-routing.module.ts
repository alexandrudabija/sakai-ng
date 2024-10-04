import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', loadComponent: () => import('./messagesdemo.component').then(m => m.MessagesDemoComponent) }
	])],
	exports: [RouterModule]
})
export class MessagesDemoRoutingModule { }
