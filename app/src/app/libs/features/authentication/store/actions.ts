import { createAction, props } from "@ngrx/store";



export const ShowAuthentication = createAction(
  '[Authentication] Authenticate',
  props<{ showAuthentication: boolean }>()
);

export const IsAuthenticated = createAction(
  '[Authentication] is authenticated',
  props<{ isAuthenticated: boolean }>()
)
