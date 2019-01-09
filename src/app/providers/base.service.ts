import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import { map } from 'rxjs/operators';
// import { throwError } from 'rxjs';
// import {catchError } from 'rxjs/operators';
// import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl = environment.apiUrl;

  constructor(protected http: Http) {}

  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }

  post(url: string, body: Object) {
    return this.request(url, RequestMethod.Post, body);
  }

  put(url: string, body: Object) {
    return this.request(url, RequestMethod.Put, body);
  }

  delete(url: string) {
    return this.request(url, RequestMethod.Delete);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  request(url: string, method: RequestMethod, body?: Object) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestOptions = new RequestOptions({
      url: `/api/${url}`,
      method: method,
      headers: headers
    });

    if (body) {
      requestOptions.body = body;
    }

    const request = new Request(requestOptions);

    return this.http.request(request).pipe(map((res: Response) => res.json()));
    // .catch((res: Response) => this.onRequestError(res));
  }

  // onRequestError(res: Response) {
  //   const statusCode = res.status;
  //   const body = res.json();

  //   const error = {
  //     statusCode: statusCode,
  //     error: body.error
  //   };

  //   console.log(error);

  //   return Observable.throw(error);
  // }
}
