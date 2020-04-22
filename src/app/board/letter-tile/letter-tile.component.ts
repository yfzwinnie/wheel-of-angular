import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letter-tile',
  templateUrl: './letter-tile.component.html',
  styleUrls: ['./letter-tile.component.scss']
})
export class LetterTileComponent implements OnInit {
  @Input() tile: any;

  constructor() { }

  ngOnInit(): void {
  }

}
