import { Component } from '@angular/core';
import { DisplayCards } from '../constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  displayCards = DisplayCards;

  constructor() { }

}
