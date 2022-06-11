import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-input-1',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss'],
})
export class InputFieldsComponent implements OnInit {

  @Input()
  styling: InputStyle = {
    color: 'white',
    placeholder: 'Placeholder',
    type: 'text'
  };
  constructor() { }

  ngOnInit() {
    console.log(this.styling);
  }

}


export interface InputStyle {
  color?: string;
  placeholder?: string;
  type?: string;
  icon?: string;
}
