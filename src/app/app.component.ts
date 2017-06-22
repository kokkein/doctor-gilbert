import { Component, AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  navItems = [
    {name: 'Landing', route: 'autocomplete'},
    {name: 'Appointment', route: 'appointment'},
    {name: 'Episode', route: 'episode'},
    {name: 'Visit', route: 'visit'},
    {name: 'Master Data', route: 'master-data'},
    {name: 'Patient', route: 'patient'},
    {name: 'Vital Signs', route: 'vital'},
    {name: 'Billing', route: 'button-toggle'},
    {name: 'Medical Record', route: 'card'},
    {name: 'Medical Calculator', route: 'card'},
    {name: 'Laboratory', route: 'mohvisit-type/3'},
    {name: 'Radiology', route: 'mohvisit-type/2'}
  ];

  selectedOption: string;

  constructor(private _element: ElementRef, public dialog: MdDialog, private router: Router) {}

  toggleMenu() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  toggleMasterData(){
    this.router.navigate(['/master-data']);
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



@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
    Items = [
    {name: 'Appointment', route: 'appointment'},
    {name: 'Landing', route: 'autocomplete'},
    {name: 'Episode', route: 'episode'},
    {name: 'Visit', route: 'visit'},
    {name: 'Patient', route: 'patient'},
    {name: 'Vital Signs', route: 'vital'},
    {name: 'Billing', route: 'button-toggle'},
    {name: 'Medical Record', route: 'card'},
    {name: 'Medical Calculator', route: 'card'},
    {name: 'Laboratory', route: 'chips'},
    {name: 'Radiology', route: 'checkbox'}
  ];
}