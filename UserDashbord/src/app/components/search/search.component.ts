import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private userService: UserService) {}
  @Output() search = new EventEmitter<string>();

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.search.emit(inputElement.value);
      console.log();
    }
  }
}
