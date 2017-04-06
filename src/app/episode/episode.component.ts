import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  public direction = "row";
  public mainAxis = "space-around";
  public crossAxis = "center";

  layoutAlign () {
      return `${this.mainAxis} ${this.crossAxis}`;
  }

  constructor() { }

  ngOnInit() {
  }

  patientDetails = [
    {
      property: 'Visit ID',
      value: 'VIT00010020',
    },
    {
      property: 'Payment Mode',
      value: 'AIA Premium Policy, AIA Berhard',
    }
  ];
  warnings = [
    {
      value: 'Nuts',
    },
    {
      value: 'Panadol, Uphamol, Paraceptamol',
    }
  ];

}
