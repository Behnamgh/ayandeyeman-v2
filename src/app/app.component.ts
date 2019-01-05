import { Component, OnInit } from '@angular/core';
import { BaseService } from './providers/base.service';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './providers/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountFromComponent } from './account-from/account-from.component';
import { RegisterAccountComponent } from './register-account/register-account.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ayandeyeman-v2';
  isLoggedIn: Boolean = false;
  token: String = localStorage.getItem('token');
  email: String = localStorage.getItem('email');

  defaultLang: string = localStorage.getItem('language') || 'en';
  constructor(private authService: AuthService, private translate: TranslateService, private modalService: NgbModal) {
    translate.setDefaultLang(this.defaultLang);
  }
  ngOnInit() {
    this.authService.reAuth(this.token).subscribe(result => {
      if (result.email !== this.email) {
        localStorage.clear();
        this.token = null;
        return;
      }
      this.isLoggedIn = true;
    });
  }
  changeLanguage() {
    this.defaultLang = this.defaultLang === 'en' ? 'fa' : 'en';
    localStorage.setItem('language', this.defaultLang);
    this.translate.setDefaultLang(this.defaultLang);
  }
  loginModal() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.ngOnInit();
    } else {
      this.modalService.open(AccountFromComponent).result.then(result => {
        this.token = result;
        this.isLoggedIn = true;
      });
    }
  }
  registerModal() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.ngOnInit();
    } else {
      this.modalService.open(RegisterAccountComponent).result.then(result => {
        this.token = result;
        this.isLoggedIn = true;
      });
    }
  }
  logOff() {
    localStorage.clear();
    this.isLoggedIn = false;
  }
}
