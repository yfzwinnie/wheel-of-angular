import { Component, OnInit } from '@angular/core';
import * as data from '../assets/data/puzzle.json';
import { EventEmitterService } from './utils/event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private eventEmitterService: EventEmitterService) {}

  puzzles: [] = (data as any).default; 
  alphabets = String.fromCharCode(...Array(123).keys()).slice(97).toUpperCase().split('');
  currentPuzzle: string = this.puzzles[Math.floor(Math.random() * this.puzzles.length)];

  onGuess(alphabet: string) {
    if(this.currentPuzzle.toUpperCase().indexOf(alphabet) > -1) {
      this.eventEmitterService.guessAlphabet(alphabet);
    };
  }
}
