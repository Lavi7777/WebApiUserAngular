import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerURL = "https://localhost:44321/api/account/register";
  private _loginURL = "https://localhost:44321/api/account/login";

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  registerUser(user){
    return this.http.post<any>(this._registerURL,user);
  }

  loginUser(user){
    return this.http.post<any>(this._loginURL,user);
  }

  loggedIn(){
   return !!localStorage.getItem('access_token');
  }

  getToken(){
    return localStorage.getItem('access_token')
  }

  logoutUser(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

}
