import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less'],
})
export class LoginPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('form submitted');
  }
}
