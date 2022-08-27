import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _usersUrl = "https://localhost:44321/api/account/users";
  private _deleteUser = "https://localhost:44321/api/account/user/";

  constructor(
    private http:HttpClient
  ) { }

  geUsers(){
    return this.http.get<any>(this._usersUrl);
  }

  deleteUser(val:any){
    return this.http.delete(this._deleteUser+val);
  }
}
