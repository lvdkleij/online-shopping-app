import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ShowAuthentication } from "src/app/libs/features/authentication/store/actions";


@Component({
  selector: 'component-user-dashboard-small',
  templateUrl: './user-dashboard-small.component.html',
  styleUrls: ['./user-dashboard-small.component.scss'],
})
export class UserDashboardSmallComponent {
  constructor(
    private readonly store: Store
  ) {}

  showAuthentication() {
    this.store.dispatch(ShowAuthentication({ showAuthentication: true}));
  }
}

