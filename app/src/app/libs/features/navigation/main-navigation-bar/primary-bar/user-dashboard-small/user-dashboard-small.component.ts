import { Component, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { ShowAuthentication } from "src/app/libs/features/authentication/store/actions";
import { AuthTypes } from "src/app/libs/features/authentication/store/reducer";
import { selectisAuthenticated, selectRedirect } from "src/app/libs/features/authentication/store/selectors";


@Component({
  selector: 'component-user-dashboard-small',
  templateUrl: './user-dashboard-small.component.html',
  styleUrls: ['./user-dashboard-small.component.scss'],
})
export class UserDashboardSmallComponent {

  @Output()
  clicked = new EventEmitter<boolean>();

  isAuthenticated$ = this.store.select(selectisAuthenticated);


  constructor(
    private readonly store: Store
  ) {

  }

  onCreateAccount() {
    this.store.dispatch(ShowAuthentication({ showAuthentication: true, authType: AuthTypes.CREATE_ACCOUNT }));
  }

  onSignIn() {
    this.store.dispatch(ShowAuthentication({ showAuthentication: true, authType: AuthTypes.SIGN_IN }));
  }
}

