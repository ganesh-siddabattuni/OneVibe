import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Get the token from localStorage
  const authToken = localStorage.getItem('authToken');

  // If a token exists, clone the request and add the Authorization header
  if (authToken) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next(clonedReq);
  }

  // If no token, pass the original request along
  return next(req);
};