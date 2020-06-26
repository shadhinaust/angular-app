import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Event App';
}
