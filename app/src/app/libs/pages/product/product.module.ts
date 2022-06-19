import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { MainNavigationBarFeatureModule } from '../../features/navigation/main-navigation-bar/main-navigation-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    MainNavigationBarFeatureModule,
  ],
  declarations: [ProductPage]
})
export class ProductPageModule {}
