import { Component, OnInit } from '@angular/core';
import * as data from '../assets/data/puzzle.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  puzzles: [] = (data as any).default; 
  currentPuzzle: string = this.puzzles[Math.floor(Math.random() * this.puzzles.length)];

  ngOnInit() {
  }
}
