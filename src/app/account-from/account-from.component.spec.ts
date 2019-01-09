import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFromComponent } from './account-from.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbActiveModal, NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
class RouterStub {
  navigate(address) {}
}
class NgbActiveModalStub {
  close(reason) {}
  dismiss(reason) {}
}

describe('AccountFromComponent', () => {
  let component: AccountFromComponent;
  let fixture: ComponentFixture<AccountFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, TranslateModule.forRoot(), FormsModule, NgbModalModule],
      declarations: [AccountFromComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: NgbActiveModal, useClass: NgbActiveModalStub },
        AuthService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
