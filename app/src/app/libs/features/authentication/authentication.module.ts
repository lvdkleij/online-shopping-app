import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AuthenticationComponent } from "./authentication.component";
import { RegisterComponent } from "./register/register.component";
import { authenticationFeatureKey, authenticationReducer } from "./store/reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(authenticationFeatureKey, authenticationReducer)
  ],
  exports: [AuthenticationComponent],
  declarations: [AuthenticationComponent, RegisterComponent]
})
export class AuthenticationModule {}
