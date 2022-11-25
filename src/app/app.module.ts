import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { TokenInterseptorService } from './services/token-interseptor.service';
import { MustMatchDirective } from './/directives/must-match.directive';
import { UserViewComponent } from './components/user-view/user-view.component'


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UsersComponent,
    HomeComponent,
    MustMatchDirective,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthService,UsersService, AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterseptorService,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
