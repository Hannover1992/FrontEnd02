import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent {
  @Output() filterChange = new EventEmitter<string>();

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterChange.emit(filterValue);
  }
}
