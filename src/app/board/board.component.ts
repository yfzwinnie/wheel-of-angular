import { Component, OnInit, Input } from '@angular/core';
import * as data from '../../assets/data/boardLayout.json';
import { EventEmitterService } from '../utils/event-emitter.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() currentPuzzle: string;
  boardLayout: [[number]] = (data as any).default; 
  board = [];

  constructor(private eventEmitterService: EventEmitterService) { 
    this.eventEmitterService.alphabetGuessed$
      .subscribe(alphabet => 
        this.showLetter(alphabet)
      )
  }

  createBoard() {
    const puzzleArr = [...this.currentPuzzle];
    let puzzleArrIndex = 0;
    this.board = this.boardLayout.map(row => {
      return row.map(number => {
        if(puzzleArr[puzzleArrIndex] === ' ') {
          puzzleArrIndex += 1;
          return "";
        } else if(number !== 0 && puzzleArrIndex !== puzzleArr.length) {
          const tileObj = { 
            letter: puzzleArr[puzzleArrIndex],
            guessed: false
          };
          puzzleArrIndex += 1;
          return tileObj;
        } else {
          return "";
        }
      })
    })
  }

  showLetter(guess: string) {
    this.board.forEach(row => 
      row.forEach(boardLetter => {
        if(boardLetter.letter && boardLetter.letter.toUpperCase() === guess) {
          boardLetter.guessed = true;
        }
      })
    )
    console.log(this.board);
  }

  ngOnInit(): void {
    this.createBoard();
  }

}
