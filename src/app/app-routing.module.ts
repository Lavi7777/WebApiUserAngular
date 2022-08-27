import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'users',
  component:UsersComponent
 },
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
