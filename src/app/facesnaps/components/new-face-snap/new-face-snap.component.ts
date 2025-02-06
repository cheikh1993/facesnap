import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit{

  snapForms!: FormGroup
  faceSnapPreview$!: Observable<FaceSnap>
  urlRegex!: RegExp
  constructor(private formBuilder: FormBuilder, private faceSnapService: FaceSnapsService, private router: Router){}
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForms = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imgUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
  });

    this.faceSnapPreview$ = this.snapForms.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        snaps: 0,
        id: 0
      }))
    )
  }
  onSubmitForm():void{
    this.faceSnapService.addFaceSnaps(this.snapForms.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe()

  }

}
