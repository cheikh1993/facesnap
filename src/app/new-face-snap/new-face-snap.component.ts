import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';

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
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.snapForms = this.formBuilder.group({
      title: [null],
      description: [null],
      imgUrl:[null],
      location: [null]
    })

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
    console.log(this.snapForms.value)
  }

}
