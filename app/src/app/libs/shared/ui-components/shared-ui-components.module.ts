import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputFieldsComponent } from "./input-fields/input-fields.component";
import { MediaCardComponent } from "./media-cards/media-card/media-card.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [InputFieldsComponent, MediaCardComponent],
  declarations: [InputFieldsComponent, MediaCardComponent],
})
export class SharedUiComponentsModule {}
