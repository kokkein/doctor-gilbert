import { MasterDataService } from './../services/masterdata.service';
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
  countries;
  titles;
  IDtypes;
  relationship;
  selectedCountry= 190;

  insuranceCtrl: FormControl;
  filteredInsurances: any;

  payorCtrl: FormControl;
  filteredPayors: any;

  gender = [
    'Male',
    'Female'
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


  constructor(private MDS: MasterDataService) {
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
    this.MDS.GetCountry().subscribe(countries => {
    this.countries = countries;});
    
    this.MDS.GetIdentificationType().subscribe(indetificationType => {
    this.IDtypes = indetificationType;});

    //this.MDS.GetInsurance().subscribe(insurance => {
    //this.insurances = insurance;});

    //this.MDS.GetPayor().subscribe(payor => {
    //this.payors = payor;});

    this.MDS.GetRelationship().subscribe(relationship => {
    this.relationship = relationship;});

    this.MDS.GetTitle().subscribe(title => {
    this.titles = title;});
  }



}
