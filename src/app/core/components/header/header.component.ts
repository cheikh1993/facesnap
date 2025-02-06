import { Component } from '@angular/core';

import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



  constructor(private router: Router){}

  onCreate(){
      this.router.navigateByUrl("facesnaps/create")
  }

}
