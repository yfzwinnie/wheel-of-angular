import { Component, OnInit, Input } from '@angular/core';
import * as data from '../../assets/data/boardLayout.json';
import { PuzzleService } from '../utils/puzzle.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() currentPuzzle: string;
  boardLayout: [[number]] = (data as any).default;
  board = [];

  constructor(private puzzleService: PuzzleService) {
    this.puzzleService.letterGuessed$.subscribe((letter) => {
      if (this.currentPuzzle.toUpperCase().indexOf(letter) > -1) {
        this.showLetter(letter);
      }
    });
  }

  createBoard() {
    const puzzleArr = [...this.currentPuzzle];
    const puzzleWords = this.currentPuzzle.split(' ');
    let puzzleArrIndex = 0;
    let wordIndex = 0;
    let moveToNextRow = false;
    this.board = this.boardLayout.map((row) => {
      moveToNextRow = false;
      return row.map((number, rowIndex) => {
        if (moveToNextRow) {
          return '';
        } else if (puzzleArr[puzzleArrIndex] === ' ') {
          puzzleArrIndex += 1;
          wordIndex += 1;
          //to calculate if we should move word to next row
          if (row.length - rowIndex - 2 < puzzleWords[wordIndex].length) {
            moveToNextRow = true;
          }
          return '';
        } else if (number !== 0 && puzzleArrIndex !== puzzleArr.length) {
          const tileObj = {
            letter: puzzleArr[puzzleArrIndex],
            guessed: false,
          };
          puzzleArrIndex += 1;
          return tileObj;
        } else {
          return '';
        }
      });
    });
  }

  showLetter(guess: string) {
    this.board.forEach((row) =>
      row.forEach((boardLetter) => {
        if (boardLetter.letter && boardLetter.letter.toUpperCase() === guess) {
          boardLetter.guessed = true;
        }
      })
    );
  }

  ngOnInit(): void {
    this.createBoard();
  }
}
