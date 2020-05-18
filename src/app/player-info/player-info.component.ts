import { PuzzleService } from './../utils/puzzle.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {
  @Input() currentSpinValue: number;
  @Input() currentPuzzle: string;
  score = 0;

  constructor(private puzzleService: PuzzleService) {
    this.puzzleService.letterGuessed$.subscribe((letter) => {
      if (this.currentPuzzle.toUpperCase().indexOf(letter) > -1) {
        this.score += this.currentSpinValue * this.calculateLetterOccurences(letter);
      }
    });
   }

  calculateLetterOccurences(letter):number {
    return this.currentPuzzle
              .split('')
              .reduce((acc, curr) => curr.toUpperCase() === letter ? acc + 1 : acc , 0);
  }

  ngOnInit(): void {
  }

}
