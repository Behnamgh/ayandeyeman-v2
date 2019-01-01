import { Component } from '@angular/core';
import { BaseService } from './providers/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ayandeyeman-v2';
  constructor(private service: BaseService) {

  }
  check() {
    this.service.check().subscribe(result => {
      console.log(result);
    });
  }
}
