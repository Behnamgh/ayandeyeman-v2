import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LettersService } from '../providers/letters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private lettersService: LettersService) {}

  ngOnInit() {}
  onSubmitLetter(form: NgForm) {
    console.log('here');

    const formvalues = Object.assign({}, form.value);
    this.lettersService.newLetter(formvalues).subscribe(
      result => {
        console.log('result', result);
      },
      error => {
        console.log('err');
      }
    );
  }
}
