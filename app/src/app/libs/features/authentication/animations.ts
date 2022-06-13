import { animate, state, style, transition, trigger } from "@angular/animations";


export const showHideAuthenticationAnim = trigger('showHideAuthenticationAnim', [
  state('true', style({
    top: '0'
  })),
  transition('* <=> *', [ animate('300ms ease-out')])
]);
