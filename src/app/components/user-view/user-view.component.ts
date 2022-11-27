import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  User:User=new User();


  constructor(
    private _usersService:UsersService,
    private _authService:AuthService,
    private _router:Router) {
      //const userId = localStorage.getItem('user_id');
      const jwtToken = localStorage.getItem('access_token');
      console.log(jwtToken);
      const jwtDecode = this.getDecodedAccessToken(jwtToken);
      const userId=jwtDecode.sub;
      this._usersService.geUser(userId)
      .subscribe(
        res =>{
          console.log("Server Request "+res);
          this.User=res;

          console.log("Server User Request "+this.User);
        },
        err=> {
          if(err instanceof HttpErrorResponse){
            if(err.status==401){
              this._router.navigate(['/login']);
            }
          }
        }
      )
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  ngOnInit(): void {

  }

}
