import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  Users:User[];

  constructor(
    private _usersService:UsersService,
    private _authService:AuthService,
    private _router:Router
  ) { }


  ngOnInit(): void {
    this.refreshEmpList();
  }

  deleteClick(item){
    console.log(item);
    if(confirm('Are you sure??')){
        this._usersService.deleteUser(item.Id).subscribe(data=>{
          this.refreshEmpList();
        })
    }
  }

  logOut(event){
      this._authService.logoutUser();
  }

  refreshEmpList(){
    this._usersService.geUsers()
    .subscribe(
      res =>{
        console.log(res);
        this.Users=res;
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

}
