import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mohvisit-type',
  templateUrl: './mohvisit-type.component.html',
  styleUrls: ['./mohvisit-type.component.css']
})
export class MOHVisitTypeComponent implements OnInit {

  data: any = {};

  constructor() { }

  ngOnInit() {
    this.data.Active = true;
  }

}
