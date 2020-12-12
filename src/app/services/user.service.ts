import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8080/user';
  private logOutUrl = 'http://localhost:8080/logout';

  constructor(private httpClient: HttpClient) {}

  // logIn
  getUser(user: String, password: String): Observable<User> {
    const userPassword = `${user}:${password}`;
    return this.httpClient.get<User>(this.url, {
      headers: {
        Authorization: `Basic ${btoa(userPassword)}`,
      },
      withCredentials: true,
    });
  }

  logOut(): Observable<any> {
    return this.httpClient.post(this.logOutUrl, null, {
      withCredentials: true,
    });
  }

  getUserProfile(): Observable<User> {
    return this.httpClient.get<User>(this.url, {
      withCredentials: true,
    });
  }

  checkSession(): Observable<User> {
    return this.httpClient.get<User>(this.url, {
      withCredentials: true,
    });
  }
}
