import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedUiComponentsModule } from "src/app/libs/shared/ui-components/shared-ui-components.module";
import { HomePageComponent } from "./home-page.component";
import { SectionComponent } from "./section/section.component";



@NgModule({
  imports: [CommonModule, SharedUiComponentsModule, ScrollingModule],
  exports: [HomePageComponent],
  declarations: [HomePageComponent, SectionComponent]
})
export class HomePageComponentModule {}
