import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { showHideAuthenticationAnim } from './animations';
import { ShowAuthentication } from './store/actions';
import { AuthTypes } from './store/reducer';
import { selectisAuthenticated, selectShowAuthentication } from './store/selectors';

@Component({
  selector: 'feature-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [
    showHideAuthenticationAnim
  ]
})
export class AuthenticationComponent implements OnInit {

  showAuthentication$ = this.store
    .select(selectShowAuthentication);

  isAuthenticated$ = this.store
    .select(selectisAuthenticated);

  authTypes = AuthTypes;

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit() {
  }

  onHideAuthentication() {
    this.store.dispatch(ShowAuthentication({ showAuthentication: false }));
  }
}
