import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    standalone: false
})
export class UserComponent {

  constructor(private userService: UserService){}

  user: User = {} as User;

  ngOnInit(){
    this.getUserDetail();
  }

  getUserDetail() {
      this.userService.getUserDetail().subscribe({
      next: response => {
        if(response.body){
          this.user = response.body;
        }else{
          console.log("Something went wrong user detail fetching");
        }
      },
      error: err => console.log(err)
    });
  }
}
