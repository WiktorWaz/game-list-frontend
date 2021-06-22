import { Observable } from 'rxjs';
import { Games } from './models/Games';
import { HttpGamesListService } from './services/http-games-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  gamesList: Games[];
  newDate = new Date();


  constructor(private http: HttpGamesListService) {
    this.init();
  }

  init(): void {
    this.http.getGames().subscribe(
      (data: Games[]) => {
        this.gamesList = data;
        console.log('done'),
          error => console.error(error),
          () => console.log('ERROR')
      }
    );
  }

  onNewGame(game: Games) {
    this.http.postGame(game).subscribe();
    this.init();
  }

  removeGame(id: Games) {
    this.http.deleteGame(id).subscribe();
    this.init();
  }

}
