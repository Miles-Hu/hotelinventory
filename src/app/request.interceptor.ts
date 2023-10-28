import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // request is immutale, so we can only clone, the new request is also immutable
    // Clone the original request to make it mutable
    // Add a new header to the cloned request
    const headers = request.headers
      .keys()
      .reduce((headersObj: { [key: string]: string }, key: string) => {
        headersObj[key] = request.headers.get(key) || '';
        return headersObj;
      }, {});

    let newRequest = request.clone({
      setHeaders: {
        // Preserve the original headers and add a new one
        ...headers,
        hello: 'world', // Add the 'hello' header with 'world' as the value
      },
    });

    // Continue the request with the modified request
    return next.handle(newRequest);
  }
}
