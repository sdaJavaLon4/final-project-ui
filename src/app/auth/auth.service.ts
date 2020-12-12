import { Subject } from 'rxjs';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthentiacted = new Subject<boolean>();
  username: String | null = null;

  constructor(private userService: UserService) {}

  logIn(username: String, password: String) {
    this.userService.getUser(username, password).subscribe(
      (user) => {
        this.isAuthentiacted.next(true);
        this.username = user.login;
      },
      (error) => {
        console.log('login failed', error);
        this.isAuthentiacted.next(false);
        this.username = null;
      }
    );
  }

  logOut() {
    this.userService.logOut().subscribe(() => {
      this.username = null;
      this.isAuthentiacted.next(false);
    });
  }

  isLoggedIn(): Promise<boolean> {
    if (this.username != null) {
      return Promise.resolve(true);
    }
    return this.userService
      .checkSession()
      .toPromise()
      .then((user) => {
        this.username = user.login;
        setTimeout(() => this.isAuthentiacted.next(true));
        return true;
      })
      .catch(() => false);
  }
}
