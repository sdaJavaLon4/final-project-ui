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
  },
  {
    path: 'links',
    component: LinksComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
