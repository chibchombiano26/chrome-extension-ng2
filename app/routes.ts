import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent, ServicesComponent, StaffComponent, CustomersComponent } from './components/index'

const routes: RouterConfig = [  
  { path: 'staff', component: StaffComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'customer', component: CustomersComponent },
  { path: '', component: LoginComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
