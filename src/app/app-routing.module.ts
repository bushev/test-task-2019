import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthPage } from './auth/auth.page';
import { SignInComponent } from './auth/signin/signin.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPage,
    children: [
      {
        path: 'signin',
        component: SignInComponent
      },
      {
        path: '**',
        redirectTo: 'signin'
      }
    ]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
