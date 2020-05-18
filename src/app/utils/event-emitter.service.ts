import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventEmitterService {
  private letterGuessSource = new Subject<string>();
  letterGuessed$ = this.letterGuessSource.asObservable();

  guessLetter(letter: string) {
    this.letterGuessSource.next(letter);
  }
}
