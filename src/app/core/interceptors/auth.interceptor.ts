import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, MonoTypeOperatorFunction, throwError } from 'rxjs';

import { tap, catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private _router: Router,
    private _toastrService: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('api') > -1) {
      return next.handle(req).pipe(this.ResponseOp());

    } else {
      return next.handle(req);
    }
  }

  ResponseOp(): MonoTypeOperatorFunction<HttpEvent<any>> {
    return tap(
      event => {
        if (event instanceof HttpResponse) {

        }
      },
      error => {
        if (error) {
          console.log(error.status + ': ' + error.statusText);
          switch (error.status) {
            case 401: case 403: {
              this._router.navigate(['/unauthorized']);
              break;
            }
            case 404: {
              let msg = JSON.parse(error.error).Message;
              this._toastrService.error(msg);
              break;
            }
            case 409: {
              let msg = JSON.parse(error.error).Message;
              this._toastrService.error(msg);
              break;
            }
            case 422:  {
              let failures = JSON.parse(error.error).Failures;
              failures.forEach(failure => {
                this._toastrService.error(failure.ErrorMessage, failure.PropertyName);
              });
              break;
            }
            case 500: case 0: {
              this._router.navigate(['internal-server-error']);
              break;
            }
            default: {  
              this._toastrService.error('unknown error'); 
              break;}
          }
        }
      }
    )
  }
}


