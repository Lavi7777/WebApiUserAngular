import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterseptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  let authService = this.injector.get(AuthService);
  const token = authService.getToken();

  if(token){
    const clone = req.clone({
      headers:req.headers.set("Authorization",
      "Bearer "+token)
    });
    return next.handle(clone);
  }else{
    return next.handle(req)
  }

  }
}
