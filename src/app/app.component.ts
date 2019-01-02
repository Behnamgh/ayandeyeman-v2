import { Component } from '@angular/core';
import { BaseService } from './providers/base.service';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ayandeyeman-v2';
  defaultLang: string = localStorage.getItem('language') || 'en';
  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang(this.defaultLang);
  }
  changeLanguage() {
    this.defaultLang = this.defaultLang === 'en' ? 'fa' : 'en';
    localStorage.setItem('language', this.defaultLang);
    this.translate.setDefaultLang(this.defaultLang);
  }
  getContacts() {
    this.authService.get('contact').subscribe(console.log);
  }
}
