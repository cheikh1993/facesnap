import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { authInterceptor } from "./Auth.interceptor";

export const httpInterceptorPrividers=[
    {provider: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true}
]