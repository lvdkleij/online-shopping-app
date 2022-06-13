import { createSelector } from '@ngrx/store';
import { State } from './reducer';

export interface AppState {
  authentication: State;
}

export const selectAuthenticationState = (state: AppState) => state.authentication;

export const selectShowAuthentication = createSelector(
  selectAuthenticationState,
  (state: State) => ({ showAuthentication: state.showAuthentication, authType: state.authType })
);

export const selectisAuthenticated = createSelector(
  selectAuthenticationState,
  (state: State) => state.isAuthenticated
);

export const selectRedirect = createSelector(
  selectAuthenticationState,
  (state: State) => state.redirect
);

