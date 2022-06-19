import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./libs/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./libs/pages/user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./libs/pages/product/product.module').then( m => m.ProductPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
