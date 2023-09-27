import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientComponent } from './layout/client/client.component';
import { SigninComponent } from './page/client/auth/signin/signin.component';
import { SignupComponent } from './page/client/auth/signup/signup.component';
import { HomePageComponent } from './page/client/home-page/home-page.component';
import { DetailProductComponent } from './page/client/detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'products/:id',
        component: DetailProductComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
