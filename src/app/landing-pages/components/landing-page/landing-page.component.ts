import { Component, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [

  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  goTo() {
    this.router.navigateByUrl("facesnaps")
  }

}

