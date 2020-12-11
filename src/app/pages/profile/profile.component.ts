import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/dto/user.dto';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  user: User; 
  subscription: Subscription;

  constructor(private userservice: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.isAuthentiacted.subscribe((isAuth) => {
      if (isAuth) {
        this.userservice.getUserProfile(sessionStorage.getItem('user')).subscribe((user) => {
          this.user = user;
      });
      }
    });
  
     
      } 
    

}
