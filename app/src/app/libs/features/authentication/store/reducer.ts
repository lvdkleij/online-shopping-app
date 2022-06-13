import { createReducer, on } from "@ngrx/store";
import * as Actions from './actions';


export enum AuthTypes {
  CREATE_ACCOUNT,
  SIGN_IN
};

export interface State {
  showAuthentication: boolean;
  showCreateAccount: boolean;
  redirect: string;
  isAuthenticated: boolean;
  authType: AuthTypes;
}

export const initialState: State = {
  redirect: '',
  authType: null,
  showAuthentication: false,
  showCreateAccount: false,
  isAuthenticated: false
};

export const authenticationReducer = createReducer(
  initialState,
  on(Actions.ShowAuthentication, (state, actions) => (
    {
      ...state,
      showAuthentication: actions.showAuthentication,
      authType: actions.authType != null ? actions.authType : state.authType,
      redirect: actions.redirect ? actions.redirect : state.redirect}
  )),
  on(Actions.IsAuthenticated, (state, { isAuthenticated }) => ({ ...state, isAuthenticated })),
);

export const authenticationFeatureKey = 'authentication';
