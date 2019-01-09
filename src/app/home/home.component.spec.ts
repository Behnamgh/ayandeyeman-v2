import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { LettersService } from '../providers/letters.service';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Letter } from '../models/letter';
import { Observable, from as observableFrom } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
export const ButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 }
};
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [TranslateModule.forRoot(), HttpModule, ReactiveFormsModule, FormsModule],
      providers: [LettersService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should error when empty form submitted', () => {
    expect(component.letterGroup.valid).toBeFalsy();
  });
  it('email field validity', () => {
    let errors = {};
    const email = component.letterGroup.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
    expect(component.letterGroup.valid).toBeFalsy();
  });

  it('should send letter with correct data', () => {
    const data = { email: 'behnam.ghafary@gmail.com', letterMsg: 'HI' };
    const service = TestBed.get(LettersService);
    spyOn(service, 'newLetter').and.returnValue(observableFrom([data]));
    expect(component.letterGroup.valid).toBeFalsy();
    component.letterGroup.controls['email'].setValue(data.email);
    component.letterGroup.controls['letterMsg'].setValue(data.letterMsg);
    component.onSubmitLetter();
    fixture.detectChanges();
    expect(component.letterGroup.valid).toBeTruthy();
    expect(component.messages.length).toBe(1);
    expect(component.messages.indexOf('Done')).not.toBe(-1);
    expect(component.messages.indexOf('Error')).toBe(-1);
  });
  // it('should send an email with valid data for letter', () => {
  //   component.onSubmitLetter(formData);
  //   fixture.detectChanges();
  //   expect(component.messages.length).toBe(1);
  //   expect(component.letterFrom.valid).toBeTruthy();
  // });
  // // it('should error while trying to submit an invalid email structure', () => {
  // //   const data = { email: 'behnamghafary', message: 'HI', status: 0 };
  // //   const form = fixture.debugElement.query(By.css('#letterFormId'));

  // //   const service = TestBed.get(LettersService);
  // //   const newLetter = spyOn(service, 'newLetter');
  // //   fixture.detectChanges();

  // //   component.letterFrom.controls['email'].setValue(data.email);
  // //   // component.letterFrom.controls.message.setValue(data.message);
  // //   fixture.detectChanges();
  // //   form.triggerEventHandler('submit', null);
  // //   fixture.detectChanges();
  // //   expect(component.testBoolean).toContain('email');
  // //   // expect(component.letterFrom.valid).toBeFalsy();
  // //   // expect(newLetter).not.toHaveBeenCalled();
  // //   // expect(newLetter).toHaveBeenCalledWith(data);
  // //   // expect(newLetter).not.toHaveBeenCalled();
  // // });
  // it('should error while trying to submit an invalid email structure', () => {
  //   // const data = { email: 'behnamghafary', message: 'HI', status: 0 };
  //   // const testForm = new NgForm([], []);
  //   const testForm = <NgForm>{
  //     value: { email: 'behnamghafary', message: 'HI', status: 0 }
  // };
  //   component.onSubmitLetter(testForm);

  //   // expect(component.testBoolean).toBeTruthy();
  //   expect(component.letterFrom.valid).toBeFalsy();
  //   // expect(newLetter).not.toHaveBeenCalled();
  //   // expect(newLetter).toHaveBeenCalledWith(data);
  //   // expect(newLetter).not.toHaveBeenCalled();
  // });
  // // it('should pass while trying to submit an valid email structure', () => {
  // //   const data = { email: 'behnam.ghafary@gmail.com', message: 'HI', status: 0 };

  // //   const email = fixture.debugElement.query(By.css('#email'));
  // //   const emailInput: HTMLInputElement = email.nativeElement;
  // //   const message = fixture.debugElement.query(By.css('#message'));
  // //   const messageInput: HTMLInputElement = message.nativeElement;
  // //   const form = fixture.debugElement.query(By.css('#letterFormId'));
  // //   emailInput.value = data.email;
  // //   messageInput.value = data.message;
  // //   emailInput.dispatchEvent(new Event('input'));
  // //   messageInput.dispatchEvent(new Event('input'));

  // //   const service = TestBed.get(LettersService);
  // //   const newLetter = spyOn(service, 'newLetter').and.returnValue(observableFrom([data]));
  // //   fixture.detectChanges();
  // //   form.triggerEventHandler('submit', null);
  // //   fixture.detectChanges();
  // //   expect(component.testBoolean).toBeTruthy();
  // //   // expect(component.letterFrom.valid).toBe(true);
  // //   // expect(component.messages.length).toBe(1);
  // //   // expect(component.messages.indexOf('Done')).not.toBe(-1);
  // //   // expect(component.messages.indexOf('Error')).toBe(-1);
  // // });
});
