import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProgressComponent } from './components/progress/progress.component';
import { Graficas1Component } from './components/graficas1/graficas1.component';
import { NopagefoundComponent } from './components/shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'register', component: ProgressComponent },
  { path: 'register', component: Graficas1Component },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Cuando no existe ninguna ruta
  { path: '**', component: NopagefoundComponent } // Cualquier no se encuentre la ruta
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
