import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
];

const isIframe = window !== window.parent && !window.opener;

const routerOptions: ExtraOptions = {
  initialNavigation:  'disabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
