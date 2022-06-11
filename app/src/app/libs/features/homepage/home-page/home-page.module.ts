import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { SectionComponent } from "./section/section.component";



@NgModule({
  imports: [CommonModule],
  exports: [HomePageComponent],
  declarations: [HomePageComponent, SectionComponent]
})
export class HomePageComponentModule {}
