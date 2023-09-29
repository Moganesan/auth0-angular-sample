import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProtectedRouteComponent } from './protected-route/protected-route.component';
import { AdminRouteComponent } from './admin-route/admin-route.component';
import { InviteFlowComponent } from './invite-flow/invite-flow.component';
// import { AuthGuard } from '@auth0/auth0-angular';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'protected',
    component: ProtectedRouteComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { roles: ['User', 'Admin'] },
  },
  {
    path: 'invite-flow',
    component: InviteFlowComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminRouteComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
