import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CarouselComponent } from "./carousel/carousel.component";
import { InputFieldsComponent } from "./input-fields/input-fields.component";
import { MediaCardComponent } from "./media-cards/media-card/media-card.component";

@NgModule({
  imports: [CommonModule, FormsModule, ScrollingModule],
  exports: [
    InputFieldsComponent,
    MediaCardComponent,
    CarouselComponent],
  declarations: [
    InputFieldsComponent,
    MediaCardComponent,
    CarouselComponent
  ],
})
export class SharedUiComponentsModule {}
