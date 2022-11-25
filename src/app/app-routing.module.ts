import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'users',component:UsersComponent},
  {path:'user',component:UserViewComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
