import { animate, state, style, transition, trigger } from "@angular/animations";


export const dropdownAnim = trigger('showDropDown', [
  state('true', style({
    height: '500px'
  })),
  state('false', style({
    height: '0'
  })),
  transition('* <=> *', [ animate('300ms')])
]);

export const borderAnim = trigger('showBorder', [
  state('true', style({
    borderBottom: '2px solid black'
  })),
  transition('* <=> *', [ animate('150ms')])
]);
