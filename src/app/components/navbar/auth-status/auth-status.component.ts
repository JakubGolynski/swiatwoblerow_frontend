import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-status',
  templateUrl: './auth-status.component.html',
  styleUrl: './auth-status.component.css'
})
export class AuthStatusComponent implements OnInit{

  constructor(private authService:AuthService){}

  public isLoggedIn: boolean = false;

  ngOnInit(): void{
   this.getIsLoggedIn();
  }

  private getIsLoggedIn(){
    this.authService.getLoggedInStatus().subscribe({
      next: value => {
        console.log(`compvalue ${value}`);
        this.isLoggedIn = value
      },
      error: err => console.log("Error occur in authStatusComp")
    });
  }
}
