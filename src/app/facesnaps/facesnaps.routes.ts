import { Routes } from "@angular/router";

export const faceSnapsRoutes:Routes = [
    {
        path: '',
        loadComponent: ()=> import('./components/face-snap-list/face-snap-list.component').then((m) => m.FaceSnapListComponent)
    },
    {
        path: 'create',
        loadComponent: () => import('./components/new-face-snap/new-face-snap.component').then((m) => m.NewFaceSnapComponent),
    },
    {
        path: ':id',
        loadComponent: () => import('./components/single-face-snap/single-face-snap.component').then((m) => m.SingleFaceSnapComponent)
    }
]