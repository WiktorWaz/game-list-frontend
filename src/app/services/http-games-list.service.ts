import { Games } from './../models/Games';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpGamesListService {

  private url = 'http://localhost:3000/games';


  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Games[]>(this.url).pipe(tap(console.log));
  }

  postGame(game: Games) {
    return this.http.post(this.url, game).pipe(tap(console.log));
  }

  deleteGame(id: any): Observable<{}>  {
    return this.http.delete<{}>(this.url + '/' + id).pipe(tap(console.log));
  }


}
