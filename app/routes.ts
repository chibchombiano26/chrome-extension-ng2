import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent, ServicesComponent } from './components/index'

const routes: RouterConfig = [  
  { path: 'service', component: ServicesComponent },
  { path: '', component: LoginComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
