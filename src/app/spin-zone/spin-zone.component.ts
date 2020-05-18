import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from '../utils/event-emitter.service';

@Component({
  selector: 'app-spin-zone',
  templateUrl: './spin-zone.component.html',
  styleUrls: ['./spin-zone.component.scss'],
})
export class SpinZoneComponent implements OnInit {
  spinValues = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  currentSpinValue: number;
  isWaitingOnGuess = false;

  constructor(private eventEmitterService: EventEmitterService) {
    this.eventEmitterService.letterGuessed$.subscribe((letter) => {
      this.isWaitingOnGuess = false;
    });
  }

  handleSpin(): void {
    const randomIndex = Math.floor(Math.random() * this.spinValues.length);
    this.currentSpinValue = this.spinValues[randomIndex];
    this.isWaitingOnGuess = true;
  }

  ngOnInit(): void {}
}
