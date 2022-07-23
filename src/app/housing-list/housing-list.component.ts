import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.scss'],
})
export class HousingListComponent implements OnInit {
  // Declaring property locationList
  // Input decorator is used to pass data from parent element to children

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  constructor() {}

  ngOnInit(): void {}

  searchHousingLocations(searchValue: string) {
    if (!searchValue) return;
    this.results = this.locationList.filter((location) =>
      location.city.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
