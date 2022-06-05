import { Component, OnInit } from '@angular/core';
import { logoAnim } from './animations';

@Component({
  selector: 'component-primary-bar',
  templateUrl: './primary-bar.component.html',
  styleUrls: ['./primary-bar.component.scss'],
  animations: [logoAnim]
})
export class PrimaryBarComponent implements OnInit {

  readonly TARGET_AUDIENCES = ['Women', 'Men', 'Kids'];
  readonly USERS_THINGS = ['assets/user.svg', 'assets/heart.svg', 'assets/heart.svg']
  mousOver: number;
  targetAudience = '';
  constructor() { }

  ngOnInit() {}

  setNewAudience(newAudience: string) {
    this.targetAudience = newAudience;
  }
}
