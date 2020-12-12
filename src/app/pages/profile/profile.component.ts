import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/dto/user.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userservice.getUserProfile().subscribe((user) => {
      this.user = user;
    });
  }
}
