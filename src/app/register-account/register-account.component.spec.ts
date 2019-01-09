import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAccountComponent } from './register-account.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { HttpModule } from '@angular/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
class NgbActiveModalSub {
  close(reason) {}
  dismiss(reason) {}
}
describe('RegisterAccountComponent', () => {
  let component: RegisterAccountComponent;
  let fixture: ComponentFixture<RegisterAccountComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAccountComponent],
      imports: [TranslateModule.forRoot(), FormsModule, HttpModule],
      providers: [{ provide: NgbActiveModal, useClass: NgbActiveModalSub }, AuthService]
    });
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
