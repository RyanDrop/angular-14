import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'ng-home-domain',
  template: `<h1>Home</h1>
    <router-outlet></router-outlet>`,
  imports: [RouterModule],
})
export class HomeDomain {}
