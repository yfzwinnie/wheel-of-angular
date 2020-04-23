import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LetterTileComponent } from './board/letter-tile/letter-tile.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { EventEmitterService } from './utils/event-emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LetterTileComponent,
    AlphabetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
