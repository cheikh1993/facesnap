import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap


  snaped!: boolean;
  onSnapTextButton!: string

  mylargeNumber: number = 9878087.78
  myPercentage: number = 0.3367
  myPrice: number = 366.78

  constructor(private faceSnapeService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.onSnapTextButton = "Snap"
    this.snaped = false

    const oneFaceSnap = this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapeService.getFaceSnapsById(oneFaceSnap)
  }

  onSnap(): void {
    if (this.snaped) {
      this.faceSnapeService.snapFaceSnapById(this.faceSnap.id, 'unSnap')
      this.onSnapTextButton = "UnSnap"
      this.snaped = false
    } else {
      this.faceSnapeService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.onSnapTextButton = "Snap"
      this.snaped = true
    }
  }

}


