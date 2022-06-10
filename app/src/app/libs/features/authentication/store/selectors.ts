import { createSelector } from '@ngrx/store';
import { State } from './reducer';

export interface AppState {
  authentication: State;
}

export const selectAuthenticationState = (state: AppState) => state.authentication;

export const selectShowAuthentication = createSelector(
  selectAuthenticationState,
  (state: State) => state.showAuthentication
);

export const selectisAuthenticated = createSelector(
  selectAuthenticationState,
  (state: State) => state.isAuthenticated
);
