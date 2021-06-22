import { Component, Output, EventEmitter } from '@angular/core';
import { Games } from '../models/Games';



@Component({
  selector: 'app-games-input',
  templateUrl: './games-input.component.html',
  styleUrls: ['./games-input.component.scss']
})
export class GamesInputComponent  {

  constructor() { }

  @Output() newGame = new EventEmitter<Games>(); 
  inputBoolean = true;
  statusBoolean = false;

  singleGame: Games = {
    name: '',
    company: '',
    score: 5,
    status: ''
  }



  addGame() {
    this.newGame.emit(this.singleGame);
  }

  buttonDisabled()  {
    this?.singleGame?.name?.length !== 0 && this?.singleGame?.company?.length !== 0 && this.statusBoolean == true ? this.inputBoolean = false :  this.inputBoolean;
  }

  changeStatus()  {
    this.statusBoolean = true;
    console.log('tue' + this.statusBoolean);
  }


}
