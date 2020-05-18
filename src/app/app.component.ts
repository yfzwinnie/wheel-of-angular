import { Component, OnInit } from '@angular/core';
import * as data from '../assets/data/puzzle.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  puzzles: [] = (data as any).default;
  alphabets = String.fromCharCode(...Array(123).keys())
    .slice(97)
    .toUpperCase()
    .split('');
  currentPuzzle: string = this.puzzles[
    Math.floor(Math.random() * this.puzzles.length)
  ];

  constructor() {}
}
