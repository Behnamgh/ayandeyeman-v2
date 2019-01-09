import { Component, OnInit } from '@angular/core';
import { LettersService } from '../providers/letters.service';
import { Letter } from '../models/letter';
import { LetterStatus } from '../models/letter-status.enum';

@Component({
  selector: 'app-my-letters',
  templateUrl: './my-letters.component.html',
  styleUrls: ['./my-letters.component.scss']
})
export class MyLettersComponent implements OnInit {
  letters: Letter[];
  LetterStatus = LetterStatus;

  constructor(private letterService: LettersService) {}

  ngOnInit() {
    this.letterService.getAccountLetter().subscribe(result => {
      this.letters = result;
    });
  }
}
