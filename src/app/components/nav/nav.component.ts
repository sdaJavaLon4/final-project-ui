import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logOut() {
    this.authService.logOut();
  }
}
