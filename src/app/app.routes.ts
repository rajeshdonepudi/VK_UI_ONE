import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { NotFoundComponent } from './components/ui/not-found/not-found.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent, // Ensures AppComponent is always present
    children: [
      {
        path: '',
        component: LandingLayoutComponent, // Default landing page
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'secure',
        component: DashboardLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full', // Redirects /secure to /secure/dashboard
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
        ],
      },
      {
        path: '**',
        component: NotFoundComponent, // Handles unknown routes
      },
    ],
  },
];
