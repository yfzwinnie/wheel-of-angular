import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() currentPuzzle: string;
  boardRows = [12, 14, 14, 12];
  board = [];
  constructor() { }

  createBoard() {
    this.board = this.boardRows.map(row => {
      return new Array(row).fill(null);
    })
  }
  
  ngOnInit(): void {
    this.createBoard();
  }

}
