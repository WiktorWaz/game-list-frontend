import { Observable } from 'rxjs';
import { Games } from '../models/Games';
import { HttpGamesListService } from '../services/http-games-list.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {

  @Input() gamesList: Games[];
  @Output() newGame = new EventEmitter<Games>(); 
  @Output() removeGameHandler = new EventEmitter<number>(); 
  

  constructor(private http: HttpGamesListService) {
    this.init();
  }

  init(): void {
  }

  // onNewGame(game: Games) {
  //   this.http.postGame(game).subscribe();
  //   this.init();
  // }

  removeGame(id: number) {
    this.removeGameHandler.emit(id);
  }

}
