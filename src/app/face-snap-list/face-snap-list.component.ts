
import { Component, OnInit, inject } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapsService } from '../services/face-snaps-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-face-snap-list',
  imports: [
    CommonModule,
    FaceSnapComponent,
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
}
