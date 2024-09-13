import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    url: `${environment.apiUrl}${req.url}`,
    setHeaders: {
      Authorization: `Bearer ${environment.apiKey}`,
    },
  });

  return next(authReq);
};
