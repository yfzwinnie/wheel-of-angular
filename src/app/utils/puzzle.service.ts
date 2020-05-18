import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import * as data from '../../assets/data/puzzle.json';

@Injectable({ providedIn: 'root' })
export class PuzzleService {
  puzzles: [] = (data as any).default;
  readonly currentPuzzle = this.puzzles[
    Math.floor(Math.random() * this.puzzles.length)
  ];

  private letterGuessSource = new Subject<string>();
  letterGuessed$ = this.letterGuessSource.asObservable();

  _isWaitingOnGuess = new BehaviorSubject<boolean>(false);
  isWaitingOnGuess$ = this._isWaitingOnGuess.asObservable();

  get isWaitingOnGuess(): boolean {
    return this._isWaitingOnGuess.getValue();
  }

  set isWaitingOnGuess(val: boolean) {
    this._isWaitingOnGuess.next(val);
  }

  guessLetter(letter: string): void {
    this.letterGuessSource.next(letter);
    this.toggleWaitingOnGuess();
  }

  toggleWaitingOnGuess(): void {
    this.isWaitingOnGuess = !this.isWaitingOnGuess;
  }
}
