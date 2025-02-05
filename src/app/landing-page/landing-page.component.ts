import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

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

=======
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  userEmail!: string;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  goTo() {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value)
  }
>>>>>>> c62eeb7 (observable)
}
