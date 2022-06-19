import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ShowAuthentication } from "src/app/libs/features/authentication/store/actions";
import { AuthTypes } from "src/app/libs/features/authentication/store/reducer";
import { selectisAuthenticated } from "src/app/libs/features/authentication/store/selectors";

@Injectable()
export class IsAuthenticated implements CanActivate {

  isAuthenticated$ = this.store
    .select(selectisAuthenticated);

  constructor(
    private readonly store: Store,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isAuthenticated$.pipe(
      map(val => {
        let val2: any = val;
        if (!val) {
          val2 = this.router.parseUrl('');
          this.store.dispatch(ShowAuthentication({ showAuthentication: true, redirect: state.url, authType: AuthTypes.SIGN_IN }));
        }
        return val2;
      })
    );
  }

}
