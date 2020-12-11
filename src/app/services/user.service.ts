import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8080/user';

  constructor(private httpClient: HttpClient) {}

  getUser(user: String, password: String): Observable<User> {
    const userPassword = `${user}:${password}`;
    return this.httpClient.get<User>(this.url, {
      headers: {
        Authorization: `Basic ${btoa(userPassword)}`,
      },
      withCredentials: true,
    });
  }

  getUserProfile(userParam: string): Observable<User> {
    return this.httpClient.get<User>(this.url, {
      headers: {
        Authorization: `Basic ${userParam}`,
      },
      withCredentials: true,
    });
  }

  checkSession(): Observable<User> {
    return this.httpClient.get<User>(this.url, {
      withCredentials: true,
    });
  }
}
