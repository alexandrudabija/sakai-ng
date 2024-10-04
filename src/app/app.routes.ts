import { Routes } from '@angular/router';
import { AppLayoutComponent } from "./pages/app.layout.component";
import { NotfoundComponent } from './@theme/components/notfound/notfound.component';

export const routes: Routes = [

    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./@theme/components/dashboard/dashboard-routing').then(r => r.routes) },
            { path: 'uikit', loadChildren: () => import('./@theme/components/uikit/uikit-routing').then(r => r.routes) },
            { path: 'utilities', loadChildren: () => import('./@theme/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            { path: 'documentation', loadChildren: () => import('./@theme/components/documentation/documentation.module').then(m => m.DocumentationModule) },
            { path: 'blocks', loadChildren: () => import('./@theme/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            { path: 'pages', loadChildren: () => import('./@theme/components/pages/pages.module').then(m => m.PagesModule) }
        ]
    },
    { path: 'auth', loadChildren: () => import('./@core/auth/auth/auth-routing').then(r => r.routes) },
    { path: 'landing', loadChildren: () => import('./@theme/components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' },

    // ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
];