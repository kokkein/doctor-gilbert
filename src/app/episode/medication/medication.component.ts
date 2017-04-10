import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
    medicationCtrl: FormControl;
    filteredMedications: any;
    medicationTemplateCtrl: FormControl;
    filteredMedicationTemplates: any;

  constructor() { 
        this.medicationCtrl = new FormControl();
        this.filteredMedications = this.medicationCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterMedication(name));

        this.medicationTemplateCtrl = new FormControl();
        this.filteredMedicationTemplates = this.medicationTemplateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterMedicationTemplate(name));
  }

  ngOnInit() {
  }

  uoms = [
    {value: 'TAB', viewValue: 'TAB'},
    {value: 'ML', viewValue: 'ML'},
    {value: 'Box', viewValue: 'Box'},
    {value: 'Saches', viewValue: 'Saches'},
  ];

  diagnosisRecord = [
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

  medications = [
    'MED001 - Panadol',
    'MED002 - Uphamol 650',
    'MED003 - Longize',
    'MED004 - Paraceptamol',
    'MED005 - Antibiotic',
    'MED006 - Amoxicilin',
    ];

  medicationTemplates = [
    'TEMP001 - URTI',
    'TEMP002 - High Fever',
    'TEMP003 - Dizzy',
    ];

  filterMedication(val: string) {
    return val ? this.medications.filter((s) => new RegExp(val, 'gi').test(s)) : this.medications;
  }

  filterMedicationTemplate(val: string) {
    return val ? this.medicationTemplates.filter((s) => new RegExp(val, 'gi').test(s)) : this.medicationTemplates;
  }

}
