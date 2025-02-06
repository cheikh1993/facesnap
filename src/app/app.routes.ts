import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './facesnaps/components/face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './facesnaps/components/single-face-snap/single-face-snap.component';

import { NewFaceSnapComponent } from './facesnaps/components/new-face-snap/new-face-snap.component';


export const routes: Routes = [
    // {path: 'facesnaps/:id',component: SingleFaceSnapComponent},
    // {path: 'facesnaps',component: FaceSnapListComponent},

    // {path: 'create',component: NewFaceSnapComponent},

    //     {
    //         path: 'facesnaps',
    //         loadComponent: () => import('./facesnaps/components/face-snap-list/face-snap-list.component').then(m => m.FaceSnapListComponent)
    //     },
    //     {
    //         path: 'facesnaps/create',
    //         loadComponent: () => import('./facesnaps/components/new-face-snap/new-face-snap.component').then(m => m.NewFaceSnapComponent)
    //     },
    //     {
    //         path: 'facesnaps/:id',
    //         loadComponent: () => import('./facesnaps/components/single-face-snap/single-face-snap.component').then(m => m.SingleFaceSnapComponent)
    //     },

    // {
    //     path: '',
    //     loadComponent: () => import('./landing-pages/components/landing-page/landing-page.component').then(m => m.LandingPageComponent),
    // }

    {
        path: "facesnaps",
        loadChildren: () => import('./facesnaps/facesnaps.routes').then((m) => m.faceSnapsRoutes)
    },
    {
        path: '',
        loadComponent: () => import('./landing-pages/components/landing-page/landing-page.component').then((m) => m.LandingPageComponent)
    },
    {
        path:'auth',loadChildren: () => import('./auth/components/aut.routes').then((m) => m.AuthRouting)
    }
];
