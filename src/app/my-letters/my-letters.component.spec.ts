import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLettersComponent } from './my-letters.component';
import { LettersService } from '../providers/letters.service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { JdatePipe } from '../pipes/jdate.pipe';

describe('MyLettersComponent', () => {
  let component: MyLettersComponent;
  let fixture: ComponentFixture<MyLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyLettersComponent, JdatePipe],
      imports: [TranslateModule.forRoot(), HttpModule, NgbAccordionModule],
      providers: [LettersService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
