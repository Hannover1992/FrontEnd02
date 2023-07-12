import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string>();

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterChange.emit(filterValue);
  }
}
