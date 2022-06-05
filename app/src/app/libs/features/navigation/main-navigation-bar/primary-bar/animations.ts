import { animate, sequence, state, style, transition, trigger } from "@angular/animations";


export const logoAnim = trigger('logoFancy', [
  transition(':enter', [
    style({ opacity: 0, left: '50%', transform: 'translateX(-50%)' }),
    sequence([
      animate('2s ease', style({ opacity: 1})),
      animate('2s ease', style({ left: 0, transform: 'translateX(0)'})),
    ])
  ]),
]);
