import { Component, OnInit } from '@angular/core';
// import { ht } from '@angular/http';
import { NgForm } from '@angular/forms';
import { BaseService } from '../providers/base.service';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-from',
  templateUrl: './account-from.component.html',
  styleUrls: ['./account-from.component.scss']
})
export class AccountFromComponent implements OnInit {
  loading: Boolean = false;

  constructor(private authService: AuthService, private router: Router, private activeModal: NgbActiveModal) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
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
