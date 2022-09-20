import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: async () => (await import('./home.domain')).HomeDomain,

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome',
      },
      {
        path: 'welcome',
        loadComponent: async () =>
          (await import('./pages/welcome/welcome.page')).WelcomePage,
      },
    ],
  },
];
