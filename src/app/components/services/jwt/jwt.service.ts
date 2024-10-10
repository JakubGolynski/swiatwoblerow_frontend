import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  
  constructor() { }

  getJwtToken(){
    return localStorage.getItem("jwtToken");
  }

  updateJwtToken(token: string){
    localStorage.setItem("jwtToken",token);
  }

  deleteJwtToken(){
    localStorage.removeItem("jwtToken");
  }

  // isTokenExpired(): Boolean{
  //   const token = localStorage.getItem("jwtToken");
  //   if(token === null){
  //     return false;
  //   }else{
      
  //   }
  // }
}
