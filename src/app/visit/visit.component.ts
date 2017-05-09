import { MasterDataService } from './../services/masterdata.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/startWith';
import {Observable} from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  visitTypes = [
    'OutPatient',
    'InPatient'
  ];
  mohs;
  mohCtrl: FormControl;
  filteredMOHs: any;
  payors;
  payorCtrl: FormControl;
  filteredPayors: any;
  visitdata: any = {};
  patients;
  patientCtrl: FormControl;
  filteredPatients: any;

   constructor(private MasterDataService: MasterDataService) {

    //assign value for edit mode
    //this.patientCtrl = new FormControl({patientID: 1, name: 'A very sick guy'});
    //this.payorCtrl = new FormControl({payorID: 13, payorName: 'Tokio Marine Life Insurance Malaysia Bhd.'});

  }
  displayMOHFn(value: any): string {
    return value && typeof value === 'object' ? value.payorName : value;
  }
  displayPayorFn(value: any): string {
    return value && typeof value === 'object' ? value.payorName : value;
  }
  displayPatientFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }
  filterMOHs(val: string) {
    //`^${val}`
    return val ? this.payors.filter((s) => new RegExp(val, 'gi').test(s.payorName))
               : this.payors;
  }
  filterPayors(val: string) {
    //`^${val}`
    return val ? this.payors.filter((s) => new RegExp(val, 'gi').test(s.payorName))
               : this.payors;
  }
  filterPatients(val: string) {
    //`^${val}`
    return val ? this.patients.filter((s) => new RegExp(val, 'gi').test(s.name))
               : this.patients;
  }

  ngOnInit() {
    this.MasterDataService.GetPayor().subscribe(payor => {
    this.payors = payor;

    //here only start filter
    this.filteredMOHs = this.mohCtrl.valueChanges
        .startWith(this.mohCtrl.value)
        .map(val => this.displayMOHFn(val))
        .map(name => this.filterMOHs(name));

    this.MasterDataService.GetPayor().subscribe(payor => {
    this.payors = payor;

    //here only start filter
    this.filteredPayors = this.payorCtrl.valueChanges
        .startWith(this.payorCtrl.value)
        .map(val => this.displayPayorFn(val))
        .map(name => this.filterPayors(name));

    });
    this.MasterDataService.GetPatient().subscribe(patient => {
    this.patients = patient;

    //here only start filter
    this.filteredPatients = this.patientCtrl.valueChanges
        .startWith(this.patientCtrl.value)
        .map(val => this.displayPatientFn(val))
        .map(name => this.filterPatients(name));

    });
  }

}
