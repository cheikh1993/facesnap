// auth.interceptor.ts
import { 
    HttpInterceptor, 
    HttpRequest, 
    HttpHandler, 
    HttpEvent 
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { inject } from '@angular/core';
  import { AuthService } from '../services/auth.service';
  
  export const authInterceptor: HttpInterceptor = {
    intercept(
      req: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      const authService = inject(AuthService);
      
      // Clone la requête et ajoute le header d'authentification
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      });
  
      return next.handle(authReq);
    }
  };