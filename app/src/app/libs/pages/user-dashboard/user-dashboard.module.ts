import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDashboardPageRoutingModule } from './user-dashboard-routing.module';

import { UserDashboardPage } from './user-dashboard.page';
import { MainNavigationBarFeatureModule } from '../../features/navigation/main-navigation-bar/main-navigation-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDashboardPageRoutingModule,
    MainNavigationBarFeatureModule,
  ],
  declarations: [UserDashboardPage]
})
export class UserDashboardPageModule {}
