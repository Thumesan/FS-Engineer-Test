import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  search(searchValue: string): void {
    this.searchValue.emit(searchValue);
  }

}
