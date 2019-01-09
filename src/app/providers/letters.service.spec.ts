import { TestBed } from '@angular/core/testing';

import { LettersService } from './letters.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('LettersService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
  );

  it('should be created', () => {
    const service: LettersService = TestBed.get(LettersService);
    expect(service).toBeTruthy();
  });
});
