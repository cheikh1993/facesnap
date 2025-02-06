
import { Component, OnInit, inject } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapsService } from '../../../core/services/face-snaps-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-face-snap-list',
  imports: [
    CommonModule,
    FaceSnapComponent,
    RouterModule,
    
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})

export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[]
  faceSnaps$!: Observable<FaceSnap[]>

  constructor(private faceSnapeService: FaceSnapsService){}

   facesnapserviceInject = inject(FaceSnapsService)

  ngOnInit(): void {
    // this.faceSnaps = this.faceSnapeService.getFaceSnaps()
    // this.faceSnaps$ = this.faceSnapeService.getFaceSnaps()
    this.faceSnaps$ = this.facesnapserviceInject.getFaceSnaps()
  }

  trackByFn(index: number, item: any): string {
    return item.title; // Utilise l'élément 'title' pour suivre les changements
  }
  
}
