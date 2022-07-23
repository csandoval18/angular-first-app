import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.scss'],
})
export class HousingListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchHousingLocations(searchValue: string) {
    console.log(searchValue);
  }
}
