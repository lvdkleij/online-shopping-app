import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-input-1',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: InputFieldsComponent
    }
  ]
})
export class InputFieldsComponent implements OnInit, ControlValueAccessor {

  @Input()
  styling: InputStyle  = {
    color: 'white',
    placeholder: 'Placeholder',
    type: 'text',
    width: 24
  };

  @Input()
  isValid = false;

  text = '';
  touched = false;
  focused = false;
  pristine = true;
  wasValid = this.isValid;
  viewbox;

  onChange = (text) => {};
  onTouched = () => {};

  ngOnInit() {
    this.styling = {
      color: this.styling?.color ? this.styling.color : 'white',
      placeholder: this.styling?.placeholder ? this.styling.placeholder : 'Placeholder',
      type: this.styling?.type ? this.styling.type : 'text',
      width: this.styling?.width ? this.styling.width : 24,
      icon: this.styling?.icon ? this.styling.icon : null
    };
  }


  onFocus() {
    this.onTouched();
    this.touched = true;
    this.focused = true;
    this.pristine = true;
  }

  onFocusout() {
    this.focused = false;
    this.pristine = false;
    this.wasValid = this.isValid;
  }

  writeValue(text: string): void {
    this.text = text;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onNgModelChange(text: string) {
    this.onChange(text);
  }

  get inputValid() {
    return this.touched && this.wasValid && !this.pristine;
  }

  get inputInvalid() {
    return this.touched && !this.wasValid && !this.pristine;
  }

  get inputUntouched() {
    return !this.touched || this.focused;
  }
}


export interface InputStyle {
  color?: string;
  placeholder?: string;
  type?: string;
  icon?: string;
  width?: number;
}
