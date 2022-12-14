import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'ng-root',
  template: `
    <h1>Hello Angular 14!</h1>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule],
})
export class AppComponent {}
