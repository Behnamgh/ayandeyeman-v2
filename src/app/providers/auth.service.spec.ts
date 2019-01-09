import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { BaseService } from './base.service';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
// class HttpStub{
//   post
//   get
//   put
//   delete
// }
describe('AuthService', () => {
  // let backend: MockBackend;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
  );

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
