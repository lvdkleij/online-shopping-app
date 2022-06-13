import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputFieldsComponent } from "./input-fields/input-fields.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [InputFieldsComponent],
  declarations: [InputFieldsComponent],
})
export class SharedUiComponentsModule {}
