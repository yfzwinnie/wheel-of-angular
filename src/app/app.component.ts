import { Component, OnInit } from '@angular/core';
import { PuzzleService } from './utils/puzzle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  alphabets = String.fromCharCode(...Array(123).keys())
    .slice(97)
    .toUpperCase()
    .split('');
  isWaitingOnGuess: boolean;
  currentSpinValue: number;

  constructor(public puzzleService: PuzzleService) {
    this.puzzleService._isWaitingOnGuess.subscribe((isWaitingOnGuess) => {
      this.isWaitingOnGuess = isWaitingOnGuess;
    });
  }

  updateSpinValue(evt: number):void {
    this.currentSpinValue = evt;
  }
}
