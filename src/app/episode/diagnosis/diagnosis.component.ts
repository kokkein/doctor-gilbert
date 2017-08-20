import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
    diagnosisCtrl: FormControl;
    filteredDiagnosis: any;
    diagnosis;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) { 
        this.diagnosisCtrl = new FormControl({diagnosisID: 0, diagnosisCode: ''});
  }

  ngOnInit() {
    this.MasterDataService.GetDiagnosis().subscribe(diagnosis => {
      this.diagnosis = diagnosis;
      //here only start filter
      this.filteredDiagnosis = this.diagnosisCtrl.valueChanges
          .startWith(this.diagnosisCtrl.value)
          .map(val => this.displayDiagnosisFn(val))
          .map(name => this.filterDiagnosis(name));
      });
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
  ];

  displayDiagnosisFn(value: any): string {
    return value && typeof value === 'object' ? value.diagnosisCode : value;
  }
  filterDiagnosis(val: string) {
    return val ? this.diagnosis.filter((s) => new RegExp(val, 'gi').test(s.diagnosisCode))
    : this.diagnosis;
  }

}
