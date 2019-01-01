import { Component } from '@angular/core';
import { BaseService } from './providers/base.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ayandeyeman-v2';
  constructor(private service: BaseService, private translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('language') || 'en');

  }
}
