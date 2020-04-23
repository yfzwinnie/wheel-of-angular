import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {
  @Input() alphabet: string;
  @Output() guess = new EventEmitter<string>();
  
  constructor() { }

  alphabetClicked(alphabet, button) {
    this.guess.emit(alphabet)
    button.disabled = true;
  }

  ngOnInit(): void {
  }

}
