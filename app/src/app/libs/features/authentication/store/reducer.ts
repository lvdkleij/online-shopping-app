import { createReducer, on } from "@ngrx/store";
import * as Actions from './actions';


export interface State {
  showAuthentication: boolean;
  isAuthenticated: boolean;
}

export const initialState: State = {
  showAuthentication: false,
  isAuthenticated: false
}

export const authenticationReducer = createReducer(
  initialState,
  on(Actions.ShowAuthentication, (state, { showAuthentication }) => ({ ...state, showAuthentication })),
  on(Actions.IsAuthenticated, (state, { isAuthenticated }) => ({ ...state, isAuthenticated }))
);

export const authenticationFeatureKey = 'authentication';
