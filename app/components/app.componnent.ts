import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
    <h1>Component Router</h1>
    <nav>      
      <a routerLink="/" routerLinkActive="login">Login</a>
      <a routerLink="/service" routerLinkActive="List">Services</a>
      <a routerLink="/staff" routerLinkActive="List">Staff</a>
      <a routerLink="/customer" routerLinkActive="List">Customer</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }