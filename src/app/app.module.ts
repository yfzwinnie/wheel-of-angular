import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LetterTileComponent } from './board/letter-tile/letter-tile.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { PuzzleService } from './utils/puzzle.service';
import { SpinZoneComponent } from './spin-zone/spin-zone.component';
import { PlayerInfoComponent } from './player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LetterTileComponent,
    AlphabetComponent,
    SpinZoneComponent,
    PlayerInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PuzzleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
