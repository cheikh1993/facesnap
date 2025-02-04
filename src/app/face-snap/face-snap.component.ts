import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
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
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {



  @Input() faceSnap!: FaceSnap


  constructor(private router: Router) { }


  onView() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }


}


