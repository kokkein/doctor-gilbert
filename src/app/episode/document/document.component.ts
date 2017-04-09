import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
  }

  documents = [
    {name: 'Documents 1', edited: new Date('1/1/16'),},
    {name: 'Documents 2', edited: new Date('1/17/16'),},
    {name: 'Documents 3', edited: new Date('1/28/16'),}
  ];

}
