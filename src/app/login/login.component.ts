import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:Login= new Login();
  isError:boolean = false;

  constructor(
    private router: Router,
     private _auth: AuthService
  ) { }


  Registration(event){
    this.router.navigate(['registration']);
  }

  Login($event){
    console.log(this.login);
    this._auth.loginUser(this.login)
    .subscribe(
      res =>{
         console.log(res);
         this.isError=false;
         localStorage.setItem('access_token',res.access_token);
         this.router.navigate(['users']);
      },
      err =>{
        console.log(err);
        this.isError=true;
      }
    )

  }

  ngOnInit(): void {

  }

}
