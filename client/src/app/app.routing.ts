import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register.component';
import { ProgressComponent } from './components/pages/progress/progress.component';
import { Graphics1Component } from './components/pages/graphics1/graphics1.component';
import { NopagefoundComponent } from './components/shared/nopagefound/nopagefound.component';
import { PagesComponent } from './components/pages/pages.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphics1', component: Graphics1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Cuando no existe ninguna ruta
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent } // Cualquier no se encuentre la ruta
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
