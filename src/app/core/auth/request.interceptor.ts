import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpProgressEvent, HttpHeaderResponse, HttpResponse,
    HttpUserEvent, HttpRequest, HttpHandler, HttpSentEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
            if (this.tokenService.hasToken()) {
                const token = this.tokenService.getToken();
                req = req.clone({
                    setHeaders: {
                        'x-access-token': token
                    }
                });
            }
            return next.handle(req);
    }
}
