import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, OnDestroy {
  isAuth = false;
  private subscription: Subscription;

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.authservice.isAuthentiacted.subscribe((isAuth) => {
      this.isAuth = isAuth;
      if (!isAuth) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
