import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class EventEmitterService {

  private alphabetGuessSource = new Subject<string>();
  alphabetGuessed$ = this.alphabetGuessSource.asObservable();

  guessAlphabet(alphabet: string) {
    this.alphabetGuessSource.next(alphabet);
  }
}