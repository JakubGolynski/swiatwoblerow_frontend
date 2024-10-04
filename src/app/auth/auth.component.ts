import { Component, OnInit } from '@angular/core';
import { Address } from '../core/models/classes/address';
import { User } from '../core/models/classes/user';
import { AuthService } from '../core/services/auth/auth.service';
import { UserInterface } from '../core/models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user = new User(null, null, null, null, null, null, null, null,null,null);
  errorMessage = '';
  //userResponse: UserInterface = new User(null, null, null, null, null, null, null, null,null,null);
  success = false

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.user)
    .subscribe({
      next: data => {
        console.log('Success',data);
        this.errorMessage = '';
      },
      error: err => this.errorMessage = err.message
    }
    )
  }

}
