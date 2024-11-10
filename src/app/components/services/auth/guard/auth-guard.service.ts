import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router) { }

  public isLoggedIn: boolean = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    this.authService.getLoggedInStatus().subscribe({
      next: status => this.isLoggedIn = status,
      error: err => console.log(err)
    })

    if(this.isLoggedIn){
      return true;
    }else{
      this.router.navigate([`/login`]);
      return false;
    }
  }
  
  
}
