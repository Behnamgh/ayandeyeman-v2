import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {
  constructor(private authService: AuthService, protected activeModal: NgbActiveModal) {}

  ngOnInit() {}
  onSubmitRegister(form: NgForm) {
    const formvalues = Object.assign({}, form.value);
    this.authService.auth(formvalues).subscribe(
      result => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          this.activeModal.close(result.token);
        }
      },
      error => {
        console.log('err');
      }
    );
  }
}
