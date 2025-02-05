import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    // UpperCasePipe,
    // LowerCasePipe,
    // DecimalPipe,
    // PercentPipe,
    // CurrencyPipe
    TitleCasePipe,
    DatePipe,
    RouterLink,
    CommonModule
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>


  snaped!: boolean;
  onSnapTextButton!: string



  constructor(private faceSnapeService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.onSnapTextButton = "Snap"
    this.snaped = false

    const oneFaceSnap = this.route.snapshot.params['id']
    this.faceSnap$ = this.faceSnapeService.getFaceSnapsById(oneFaceSnap)
  }

  onSnap(faceSnapId: number): void {
    if (this.snaped) {
      this.faceSnap$ = this.faceSnapeService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.onSnapTextButton = "UnSnap"
          this.snaped = false
        })
      )
    
    } else {
     this.faceSnap$ = this.faceSnapeService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.onSnapTextButton = "Snap"
          this.snaped = true
        })
      )
    }
  }

}


