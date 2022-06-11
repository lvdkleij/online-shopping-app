import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputFieldsComponent } from "./input-fields/input-fields.component";

@NgModule({
  imports: [CommonModule],
  exports: [InputFieldsComponent],
  declarations: [InputFieldsComponent],
})
export class SharedUiComponentsModule {}
