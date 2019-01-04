import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService extends BaseService {
  constructor(protected http: Http) {
    super(http);
  }
  auth(form: any): Observable<{ message: string; token: string }> {
    return this.post('auth', form);
  }
  reAuth(token): Observable<{ email: string }> {
    return this.post('reAauth', { token });
  }
}
