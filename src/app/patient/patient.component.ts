import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  inUse = true;

  insuranceCtrl: FormControl;
  filteredInsurances: any;

  payorCtrl: FormControl;
  filteredPayors: any;

  titles = [
    {value: 'Tun', viewValue: 'Tun'},
    {value: 'Tan Seri', viewValue: 'Tan Seri'},
    {value: 'Dato Seri', viewValue: 'Dato Seri'},
    {value: 'Dato', viewValue: 'Dato'},
    {value: 'Datin', viewValue: 'Datin'},
    {value: 'Doctor', viewValue: 'Doctor'},
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Mrs', viewValue: 'Mrs'}
  ];

  gender = [
    'Male',
    'Female'
  ];

  IDtypes = [
    {value: 'NRIC', viewValue: 'NRIC'},
    {value: 'Tentera No', viewValue: 'Tentera No'},
    {value: 'Passport', viewValue: 'Passport'}
  ];

  states = [
    {value: 'Kuala Lumpur', viewValue: 'Kuala Lumpur'},
    {value: 'Selangor', viewValue: 'Selangor'},
    {value: 'Cyberjaya', viewValue: 'Cyberjaya'},
    {value: 'Perak', viewValue: 'Perak'},
    {value: 'Pahang', viewValue: 'Pahang'},
    {value: 'Johor', viewValue: 'Johor'},
    {value: 'Sabah', viewValue: 'Sabah'},
    {value: 'Penang', viewValue: 'Penang'}
  ];

  countries = [
    {value: 'Malaysia', viewValue: 'Malaysia'},
    {value: 'Indonesia', viewValue: 'Indonesia'},
    {value: 'Thailand', viewValue: 'Thailand'},
    {value: 'England', viewValue: 'England'},
    {value: 'Australia', viewValue: 'Australia'},
    {value: 'Germany', viewValue: 'Germany'},
    {value: 'Singapore', viewValue: 'Singapore'},
    {value: 'Japan', viewValue: 'Japan'}
  ];

  relationship = [
    {value: 'Father', viewValue: 'Father'},
    {value: 'Mother', viewValue: 'Mother'},
    {value: 'Guardian', viewValue: 'Guardian'},
    {value: 'Brother', viewValue: 'Brother'},
    {value: 'Sister', viewValue: 'Sister'}
  ];

insurances = [
    'AIA Golden Age',
    'Great Estern Platinum Policy',
    'Maybank Takaful Policy',
    'Maybank Berhad Golden Time',
    'City Bank ChildCare',
    'Discovery Premium',
    'Discovery Comprehensive',
  ];

payors = [
    'AIA Sdn Bhd',
    'Great Estern Sdn Bhd',
    'Maybank Takaful Sdn Bhd',
    'Maybank Berhad',
    'City Bank',
    'Compu Group Medical Sdn Bhd',
    'HSBC Berhad',
    'Petronas Berhad',
  ];


  constructor() {
    this.insuranceCtrl = new FormControl();
    this.filteredInsurances = this.insuranceCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterInsurances(name));

    this.payorCtrl = new FormControl();
    this.filteredPayors = this.payorCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterPayors(name));

}

  filterInsurances(val: string) {
    return val ? this.insurances.filter((s) => new RegExp(val, 'gi').test(s)) : this.insurances;
  }

  filterPayors(val: string) {
    return val ? this.payors.filter((s) => new RegExp(val, 'gi').test(s)) : this.payors;
  }

  ngOnInit() {

  }

}
