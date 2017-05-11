import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purpose-of-visit',
  templateUrl: './purpose-of-visit.component.html',
  styleUrls: ['./purpose-of-visit.component.css']
})
export class PurposeOfVisitComponent implements OnInit {

  data: any = {};

  constructor() { }

  ngOnInit() {
    this.data.Active = true;
  }

}
