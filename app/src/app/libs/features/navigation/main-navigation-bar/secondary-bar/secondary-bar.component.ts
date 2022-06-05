import { Component, OnInit } from '@angular/core';
import { borderAnim, dropdownAnim, overlayAnim, searchAnim } from './animations';

@Component({
  selector: 'component-secondary-bar',
  templateUrl: './secondary-bar.component.html',
  styleUrls: ['./secondary-bar.component.scss'],
  animations: [
    dropdownAnim,
    borderAnim,
    searchAnim,
    overlayAnim
  ]
})
export class SecondaryBarComponent implements OnInit {

  showDropdown = 0;
  searchFocus = false;
  readonly CATEGORIES = ['Clothes', 'Shoes', 'Sport', 'Accessories', 'Designer'];
  constructor() { }

  ngOnInit() {}


  show(id: number) {
    this.showDropdown = id;
  }

  close() {
    this.showDropdown = 0;
  }
}
