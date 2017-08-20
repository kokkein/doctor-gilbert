import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  public hide = false;
  public direction = "row";
  public mainAxis = "space-around";
  public crossAxis = "center";
  public hgh=100;

//  layoutAlign () {
//      return `${this.mainAxis} ${this.crossAxis}`;
//  }

  constructor() { }

  ngOnInit() {
  }

  patientDetails = [
    { property: 'Visit ID', value: 'VIT00010020',},
    { property: 'Visit Date-Time', value: '01-02-2016 10:30AM',},
    { property: 'Payment Mode', value: 'AIA Premium Policy, AIA Berhard',}
  ];

  warnings = [
    { value: 'Nuts',},
    { value: 'Panadol, Uphamol, Paraceptamol',}
  ];

  togglePatientBar(){
    //this.hide = !this.hide;
    this.hgh = 20;
  }
}
