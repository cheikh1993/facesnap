<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapsService } from '../services/face-snaps-service';
=======
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapsService } from '../services/face-snaps-service';
import { interval, tap,take, Subject, takeUntil } from 'rxjs';
>>>>>>> c62eeb7 (observable)

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
<<<<<<< HEAD
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[]

  constructor(private faceSnapeService: FaceSnapsService){}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapeService.getFaceSnaps()
  }
}
=======
export class FaceSnapListComponent implements OnInit,OnDestroy {

  faceSnaps!: FaceSnap[]
  private destroy$!: Subject<boolean>

  constructor(private faceSnapeService: FaceSnapsService){}
  
  
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapeService.getFaceSnaps()
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe()
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true)
  }
}
>>>>>>> c62eeb7 (observable)
