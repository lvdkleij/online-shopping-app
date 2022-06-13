import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { SharedUiComponentsModule } from "../../shared/ui-components/shared-ui-components.module";
import { AuthenticationComponent } from "./authentication.component";
import { RegisterComponent } from "./register/register.component";
import { SigninComponent } from "./signin/signin.component";
import { authenticationFeatureKey, authenticationReducer } from "./store/reducer";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiComponentsModule,
    StoreModule.forFeature(authenticationFeatureKey, authenticationReducer)
  ],
  exports: [AuthenticationComponent],
  declarations: [AuthenticationComponent, RegisterComponent, SigninComponent]
})
export class AuthenticationModule {}
