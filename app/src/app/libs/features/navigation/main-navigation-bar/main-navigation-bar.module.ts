import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainNavigationBarFeature } from "./main-navigation-bar.component";
import { PrimaryBarComponent } from "./primary-bar/primary-bar.component";
import { SecondaryBarComponent } from "./secondary-bar/secondary-bar.component";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [MainNavigationBarFeature],
  declarations: [
    MainNavigationBarFeature,
    PrimaryBarComponent,
    SecondaryBarComponent
  ]
})
export class MainNavigationBarFeatureModule {}
