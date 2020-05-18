import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PuzzleService } from '../utils/puzzle.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss'],
})
export class AlphabetComponent implements OnInit {
  @Input() alphabet: string;

  constructor(private puzzleService: PuzzleService) {}

  alphabetClicked(alphabet, button) {
    this.puzzleService.guessLetter(alphabet);
    button.disabled = true;
  }

  ngOnInit(): void {}
}
