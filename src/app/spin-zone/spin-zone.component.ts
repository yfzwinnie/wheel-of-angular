import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PuzzleService } from '../utils/puzzle.service';

@Component({
  selector: 'app-spin-zone',
  templateUrl: './spin-zone.component.html',
  styleUrls: ['./spin-zone.component.scss'],
})
export class SpinZoneComponent implements OnInit {
  spinValues = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  currentSpinValue: number;
  isWaitingOnGuess: boolean;
  @Output() updateSpinValue = new EventEmitter<number>();

  constructor(private puzzleService: PuzzleService) {
    this.puzzleService._isWaitingOnGuess.subscribe((isWaitingOnGuess) => {
      this.isWaitingOnGuess = isWaitingOnGuess;
    });
  }

  handleSpin(): void {
    const randomIndex = Math.floor(Math.random() * this.spinValues.length);
    this.currentSpinValue = this.spinValues[randomIndex];
    this.puzzleService.toggleWaitingOnGuess();
    this.updateSpinValue.emit(this.currentSpinValue);
  }

  ngOnInit(): void {}
}
