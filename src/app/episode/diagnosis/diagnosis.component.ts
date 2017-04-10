import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
    diagnosisCtrl: FormControl;
    filteredDiagnosis: any;

  constructor() { 
        this.diagnosisCtrl = new FormControl();
        this.filteredDiagnosis = this.diagnosisCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterDiagnosis(name));
  }

  ngOnInit() {
  }

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

  diagnosis = [

    'H60.00	‑	H62.8X9  	 	H60-H62 Diseases of external ear (H60-H62)',
    'H65.00	‑	H75.83  	 	H65-H75 Diseases of middle ear and mastoid (H65-H75)',
    'H80.00	‑	H83.93  	 	H80-H83 Diseases of inner ear (H80-H83)',
    'H90.0	‑	H94.83  	 	H90-H94 Other disorders of ear (H90-H94)',
    'E00.0	‑	E07.9  	 	E00-E07 Disorders of thyroid gland (E00-E07)',
    'E08.00	‑	E13.9  	 	E08-E13 Diabetes mellitus (E08-E13)',
    'E15	‑	E16.9  	 	E15-E16 Other disorders of glucose regulation and pancreatic internal secretion (E15-E16)',
    'E20.0	‑	E35  	 	E20-E35 Disorders of other endocrine glands (E20-E35)',
    'E36.01	‑	E36.8  	 	E36 Intraoperative complications of endocrine system (E36)',
    'E40	‑	E46  	 	E40-E46 Malnutrition (E40-E46)',
    'E50.0	‑	E64.9  	 	E50-E64 Other nutritional deficiencies (E50-E64)',
    'E65	‑	E68  	 	E65-E68 Overweight, obesity and other hyperalimentation (E65-E68)',
    'E70.0	‑	E88.9  	 	E70-E88 Metabolic disorders (E70-E88)',
    ];

  filterDiagnosis(val: string) {
    return val ? this.diagnosis.filter((s) => new RegExp(val, 'gi').test(s)) : this.diagnosis;
  }

}
