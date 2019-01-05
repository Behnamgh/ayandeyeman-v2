import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LettersService extends BaseService {
  constructor(protected http: Http) {
    super(http);
  }
  getAccountLetter() {
    return this.post('letters', { token: this.getToken() });
  }
  newLetter(letter) {
    console.log(letter);

    return this.post('addNewLetter', letter);
  }
}
