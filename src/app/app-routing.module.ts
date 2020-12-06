import { AuthGuard } from './auth/auth.guard';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './pages/links/links.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '', // localhost:4200/
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home', // localhost:4200/home
    component: HomeComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'links',
    component: LinksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
