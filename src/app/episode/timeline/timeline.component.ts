import { Component, OnInit } from '@angular/core';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
public selectEvent: ChartSelectEvent;

 public timelineChartOptions:any =  {
    chartType: 'Timeline',
    dataTable: [
      ['Location', 'From', 'To'],
      [ 'Consultation Room',           new Date(2017, 1, 1, 12,0,0),  new Date(2017, 1, 1, 13,0,0) ],
      [ 'Ward 5A',                     new Date(2017, 1, 1, 14,0,0),  new Date(2017, 1, 2, 12,0,0) ],
      [ 'Laboratory Department',       new Date(2017, 1, 2, 14,0,0),  new Date(2017, 1, 3, 12,0,0) ],
      [ 'Ward 5A',                     new Date(2017, 1, 3, 16,0,0),  new Date(2017, 1, 4, 12,0,0) ],
      [ 'Radiology Department',        new Date(2017, 1, 4, 12,0,0),  new Date(2017, 1, 4, 19,0,0) ],
      [ 'Ward 5A',                     new Date(2017, 1, 4, 20,0,0),  new Date(2017, 1, 6, 12,0,0) ],
      [ 'Ward 5B',                     new Date(2017, 1, 6, 14,0,0),  new Date(2017, 1, 8, 12,0,0) ],
      [ 'Ward 5A',                     new Date(2017, 1, 9, 20,0,0),  new Date(2017, 1, 23, 12,0,0) ],
    ],
    options: {
      animation: {easing: 'out'}, height: 350,
      greenFrom: 1, greenTo: 4,
      minorTicks: 5,
      min: 0, max: 5,
      majorTicks: ['0', '1', '2', '3', '4', '5'],
      greenColor: '#d0e9c6'
    }
 }

  public ready(event: ChartReadyEvent) {
    console.log(event.message);
  }

  public error(event: ChartErrorEvent) {
    console.error(event);
  }

  public select(event: ChartSelectEvent) {
    this.selectEvent = event;
  }

}
