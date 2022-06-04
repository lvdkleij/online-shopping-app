import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MainNavigationBarFeatureModule } from '../../features/navigation/main-navigation-bar/main-navigation-bar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MainNavigationBarFeatureModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
