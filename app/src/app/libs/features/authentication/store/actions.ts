import { createAction, props } from "@ngrx/store";
import { AuthTypes } from "./reducer";



export const ShowAuthentication = createAction(
  '[Authentication] Authenticate',
  props<{ showAuthentication: boolean, authType?: AuthTypes, redirect?: string}>()
);

export const IsAuthenticated = createAction(
  '[Authentication] is authenticated',
  props<{ isAuthenticated: boolean }>()
)
