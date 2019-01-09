import { Component, OnInit } from '@angular/core';
// import { ht } from '@angular/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-account-from',
  templateUrl: './account-from.component.html',
  styleUrls: ['./account-from.component.scss']
})
export class AccountFromComponent implements OnInit {
  loading: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public activeModal: NgbActiveModal,
    translate: TranslateService
  ) {}

  ngOnInit() {}
  onSubmitLogin(form: NgForm) {
    this.loading = true;
    const formvalues = Object.assign({}, form.value);
    this.authService.auth(formvalues).subscribe(
      result => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          this.router.navigate(['/home']);
          this.activeModal.close(result.token);
        }
      },
      error => {
        console.log('err');
      }
    );
  }
}
