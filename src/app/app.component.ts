import { Component, AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  navItems = [
    {name: 'Landing', route: 'autocomplete'},
    {name: 'Episode/Visit', route: 'visit'},
    {name: 'Patient', route: 'patient'},
    {name: 'User', route: 'user'},
    {name: 'Vital Signs', route: 'vital'},
    {name: 'Billing', route: 'button-toggle'},
    {name: 'Inventory', route: 'inventory-item'},
    {name: 'Medical Record', route: 'card'},
    {name: 'Medical Calculator', route: 'card'},
    {name: 'Labrotary', route: 'chips'},
    {name: 'Radiology', route: 'checkbox'}
  ];

  constructor(private _element: ElementRef) {

  }

  toggleFullscreen() {
    let elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }


 }
