import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sassy-app';
  navigating:boolean;

  constructor(private router: Router) { }

  clickDot(arg: string) {
    console.log('arg',arg);
    this.navigating = true;
    this.router.navigate(['basic']);
  }
  
}
