import { AuthService } from './../../auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  errorMsg = null;

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    sessionStorage.setItem(
      'user',
      btoa(this.loginForm.get('login').value + ':' + this.loginForm.get('password').value)
    );
    this.subscription = this.authService.isAuthentiacted.subscribe((isAuth) => {
      if (isAuth) {
        this.router.navigateByUrl('/profile');
      } else {
        this.errorMsg = 'incorrect login or password';
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(`form submitted`, this.loginForm);
    const username = this.loginForm.get('login').value;
    const password = this.loginForm.get('password').value;
    this.authService.logIn(username, password);
  }
}
