import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  diagnosis = [
    {
      diagnosisCode: 'A203',
      diagnosisDesc: 'Ear, Eye and Throat',
      Note: 'Patient complaint very painful at the ear, but overall is working well and can certainly sleep very well as night... this is an extreme long text and how it will be display?',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
    {
      diagnosisCode: 'A803',
      diagnosisDesc: 'URTI',
      Note: 'Serious flu since 3 week ago...',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 1,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
    {
      diagnosisCode: 'A203',
      diagnosisDesc: 'Ear, Eye and Throat',
      Note: 'Patient complaint very painful at the ear, but overall is working well and can certainly sleep very well as night... this is an extreme long text and how it will be display?',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
  ];

}
