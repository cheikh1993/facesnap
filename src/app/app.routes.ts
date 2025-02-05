import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
<<<<<<< HEAD
=======
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
>>>>>>> c62eeb7 (observable)

export const routes: Routes = [
    {path: 'facesnaps/:id',component: SingleFaceSnapComponent},
    {path: 'facesnaps',component: FaceSnapListComponent},
<<<<<<< HEAD
=======
    {path: 'create',component: NewFaceSnapComponent},
>>>>>>> c62eeb7 (observable)
    {path: '', component: LandingPageComponent}
];
