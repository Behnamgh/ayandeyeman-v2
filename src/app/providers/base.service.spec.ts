import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import { HttpModule, BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('BaseService', () => {
  // let backend: MockBackend;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientModule]
      // providers: [
      //   MockBackend,

      //   {
      //     deps: [MockBackend, BaseRequestOptions],
      //     provide: Http,
      //     // tslint:disable-next-line:no-shadowed-variable
      //     useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
      //       return new Http(backend, defaultOptions);
      //     }
      //   }
      // ]
    })
  );

  it('should be created', () => {
    const service: BaseService = TestBed.get(BaseService);
    expect(service).toBeTruthy();
  });
});
