
import { Routes } from '@angular/router';


export const routes: Routes = [
		{ path: '', loadComponent: () => import('./buttondemo.component').then(m => m.ButtonDemoComponent) }
	]