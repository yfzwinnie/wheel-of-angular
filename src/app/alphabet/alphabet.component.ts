import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventEmitterService } from '../utils/event-emitter.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss'],
})
export class AlphabetComponent implements OnInit {
  @Input() alphabet: string;

  constructor(private eventEmitterService: EventEmitterService) {}

  alphabetClicked(alphabet, button) {
    this.eventEmitterService.guessLetter(alphabet);
    button.disabled = true;
  }

  ngOnInit(): void {}
}
