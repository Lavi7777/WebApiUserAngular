import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user:User=new User();
  constructor(
    private router: Router,
    private _auth: AuthService
  ) { }

  Registration(event){
    console.log(this.user);
    this._auth.registerUser(this.user)
    .subscribe(
      res =>console.log(res),
      err =>console.log(err)
    )
    this.router.navigate(['login']);
  }

  Login($event){
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
  }


}
