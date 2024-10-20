import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: User = {id: null, username: null, password: null, firstName: null,
    lastName: null, email:null, telephone:null, jwtToken:null, address: null, roles: null};
  errorMessage = '';
  success = false;

  constructor(private authService:AuthService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.user).subscribe({
      next: response => {
        if(response.jwtToken !== null){
          this.authService.updateJwtToken(response.jwtToken);
          this.redirectToUrlBeforeAuth();
        }else{
          this.errorMessage = `An error occurred on the server. Please try again later.`;
        }
      },
      error: err => {
        this.errorMessage = `Incorrect username or password. Please try again.`;
      }
    })
  }

  redirectToUrlBeforeAuth(){
    this.router.navigate([`home`]);
  }

}
