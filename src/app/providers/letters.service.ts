import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Http } from '@angular/http';
import { Letter } from '../models/letter';
import { Observable } from 'rxjs';

@Injectable()
export class LettersService extends BaseService {
  constructor(protected http: Http) {
    super(http);
  }
  getAccountLetter(): Observable<Letter[]> {
    return this.post('letters', { token: this.getToken() });
  }
  newLetter(letter: Letter): Observable<Letter> {
    return this.post('addNewLetter', letter);
  }
}
