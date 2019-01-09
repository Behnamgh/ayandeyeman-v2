import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, EmailValidator, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LettersService } from '../providers/letters.service';
import { Letter } from '../models/letter';
import { LetterStatus } from '../models/letter-status.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messages: string[] = [];
  testBoolean: any;
  letterGroup: FormGroup;
  @ViewChild('letterFrom') letterFrom: NgForm;
  constructor(private formBuilder: FormBuilder, private lettersService: LettersService) {}

  ngOnInit() {
    this.letterGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]],
      letterMsg: ['', Validators.required]
    });
  }

  onSubmitLetter() {
    const formvalues: Letter = Object.assign({}, this.letterGroup.value);
    formvalues.status = LetterStatus.initial;
    console.log(this.letterFrom);

    if (this.letterGroup.valid) {
      this.lettersService.newLetter(formvalues).subscribe(
        result => {
          console.log(result);
          this.messages.push('Done');
        },
        error => {
          console.log('err');
        }
      );
    } else {
      this.messages.push('Error');
    }
    console.log(this.messages);
  }
}
