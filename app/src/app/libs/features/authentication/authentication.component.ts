import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { showHideAuthenticationAnim } from './animations';
import { ShowAuthentication } from './store/actions';
import { selectShowAuthentication } from './store/selectors';

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

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit() {
  }

  onHideAuthentication() {
    this.store.dispatch(ShowAuthentication({ showAuthentication: false }));
  }
}
