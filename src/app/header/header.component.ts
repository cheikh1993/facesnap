import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterLinkActive } from '@angular/router';
=======
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
>>>>>>> c62eeb7 (observable)

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
<<<<<<< HEAD

=======
  constructor(private router: Router){}

  onCreate(){
      this.router.navigateByUrl("create")
  }
>>>>>>> c62eeb7 (observable)
}
