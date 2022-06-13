import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticated } from './guards/isAuthenticated.guard';

import { UserDashboardPage } from './user-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardPage,
    canActivate: [IsAuthenticated]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [IsAuthenticated]
})
export class UserDashboardPageRoutingModule {}
