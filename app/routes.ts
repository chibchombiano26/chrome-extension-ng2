import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent, ServicesComponent, StaffComponent } from './components/index'

const routes: RouterConfig = [  
  { path: 'staff', component: StaffComponent },
  { path: 'service', component: ServicesComponent },
  { path: '', component: LoginComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
