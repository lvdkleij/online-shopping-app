import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IsAuthenticated, ShowAuthentication } from '../store/actions';
import { selectRedirect } from '../store/selectors';

@Component({
  selector: 'feature-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  form = this.formbuilder.group({
    username: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private formbuilder: UntypedFormBuilder,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(IsAuthenticated({ isAuthenticated: true }));
      this.store.dispatch(ShowAuthentication({ showAuthentication: false }));
      this.store.select(selectRedirect).subscribe(path => {
        if (path) {
          this.router.navigate([path]);
        }
      });
      this.form.reset();
    }
  }

  get usernameIsValid(): boolean {
    return this.form.get('username').valid;
  }

  get passwordIsValid(): boolean {
    return this.form.get('password').valid;
  }

}
