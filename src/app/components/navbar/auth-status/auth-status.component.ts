import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-status',
  templateUrl: './auth-status.component.html',
  styleUrl: './auth-status.component.css'
})
export class AuthStatusComponent implements OnInit{

  constructor(private authService:AuthService,
              private router: Router
  ){}

  public isLoggedIn: boolean = false;

  ngOnInit(): void{
    this.getIsLoggedIn();
  }

  private getIsLoggedIn(){
    this.authService.getLoggedInStatus().subscribe({
      next: value => {
        this.isLoggedIn = value
      },
      error: err => console.log("Error occur in authStatusComp")
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate([`/login`]);
  }
}
