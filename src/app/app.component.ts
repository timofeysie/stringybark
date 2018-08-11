import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sassy-app';

  constructor() { }

  clickDot(arg: string) {
    console.log('arg',arg);
  }
  
}
