import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

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

}
