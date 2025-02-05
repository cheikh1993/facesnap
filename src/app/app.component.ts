import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';
=======
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';
import { Observable, filter, interval, map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
>>>>>>> c62eeb7 (observable)

@Component({
  selector: 'app-root',
  imports: [
    
    HeaderComponent,
<<<<<<< HEAD
    RouterOutlet
=======
    RouterOutlet,
    CommonModule,
    
>>>>>>> c62eeb7 (observable)
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
<<<<<<< HEAD
export class AppComponent {
}
=======
export class AppComponent  implements OnInit{

  interval$!: Observable<string>
  ngOnInit(): void {
    
     this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? `je suis un valeur pair de ${value}` : `je suis une valeur impaire de ${value}`),
      tap(text => this.loggger(text))
     )

  
  } 
  loggger(text: string){
    console.log(`Log : ${text}`)
  }
}
>>>>>>> c62eeb7 (observable)
