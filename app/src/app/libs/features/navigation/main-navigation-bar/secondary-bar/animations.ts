import { animate, state, style, transition, trigger } from "@angular/animations";


export const dropdownAnim = trigger('showDropDown', [
  state('true', style({
    height: '500px'
  })),
  state('false', style({
    height: '0'
  })),
  transition('false => true', [ animate('250ms 100ms ease-out')]),
  transition('true => false', [ animate('250ms ease-out')])
]);

export const borderAnim = trigger('showBorder', [
  state('true', style({
    borderBottom: '2px solid black'
  })),
  transition('* <=> *', [ animate('150ms')])
]);

export const searchAnim = trigger('expandSearch', [
  state('true', style({
    width: '300px'
  })),
  transition('* <=> *', [ animate('200ms')])
]);

export const overlayAnim = trigger('hideOverlay', [
  state('true', style({
    pointerEvents: 'none'
  })),
  transition('* <=> *', [ animate('0ms')])
]);
