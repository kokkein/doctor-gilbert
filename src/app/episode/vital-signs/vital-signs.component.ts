import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css']
})
export class VitalSignsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  documents = [
    {name: 'Documents 1', edited: new Date('1/1/16'),},
    {name: 'Documents 2', edited: new Date('1/17/16'),},
    {name: 'Documents 3', edited: new Date('1/28/16'),}
  ];
}
