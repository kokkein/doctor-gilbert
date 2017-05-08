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
  payors;
  states;
  
  selectedCountry= 190;
  reactiveStates: any;

  tdDisabled = false;


//payors =
//[
//  {payorID:2,payorName:'Great Eastern Life Assurance (Malaysia) Berhad',phone:'03-4259 8888',fax:'03-4259 8000',email:'wecare-my@greateasternlife.com',address:'Menara Great Eastern, 303, Jalan Ampang',city:'',state:'Kuala Lumpur',zipcode:50450,countryID:381},
//  {payorID:3,payorName:'Allianz Life Insurance Malaysia Berhad',phone:'03-2264 1188',fax:'03-2264 1199',email:'Customer.service@allianz.com.my',address:'Level 29, Menara Allianz Sentral, 203, Jalan Tun Sambanthan, Kuala Lumpur Sentral',city:'',state:'Kuala Lumpur',zipcode:50470,countryID:381},
//  {payorID:4,payorName:'AmMetLife Insurance Berhad',phone:'03-2271 8000',fax:'03-2272 3230',email:'customercare@ammetlife.com',address:'Level 24, Menara 1 Sentrum, No.201 , Jalan Tun Sambanthan',city:'',state:'Kuala Lumpur',zipcode:50470,countryID:381},
//  {payorID:5,payorName:'AIA Bhd.',phone:'03-2056 1111',fax:'03-2056 2992',email:'corporate-ops.my@aia.com',address:'Menara AIA, 99 Jalan Ampang',city:'',state:'Kuala Lumpur',zipcode:50450,countryID:381},
//  {payorID:6,payorName:'AXA AFFIN Life Insurance Berhad',phone:'03-2117 6688',fax:'03-2117 6768',email:'customer.care@axa-life.com.my',address:'8th Floor Chulan Tower, 3 Jalan Conlay',city:'',state:'Kuala Lumpur',zipcode:50450,countryID:381},
//  {payorID:7,payorName:'Etiqa Insurance Berhad',phone:'03-2297 3888',fax:'03-2297 3800',email:'info@etiqa.com.my',address:'Level 19, Tower C, Dataran Maybank, No. 1, Jalan Maarof',city:'',state:'Kuala Lumpur',zipcode:59000,countryID:381},
//  {payorID:8,payorName:'Etiqa Insurance Berhad',phone:'03-2297 3888',fax:'03-2297 3800',email:'info@etiqa.com.my',address:'Level 19, Tower C, Dataran Maybank, No. 1, Jalan Maarof',city:'',state:'Kuala Lumpur',zipcode:59000,countryID:381},
//  {payorID:9,payorName:'Manulife Insurance Berhad',phone:'03-2297 3888',fax:'03-2297 3800',email:'info@etiqa.com.my',address:'Level 19, Tower C, Dataran Maybank, No. 1, Jalan Maarof',city:'',state:'Kuala Lumpur',zipcode:59000,countryID:381},
//  {payorID:10,payorName:'MCIS Insurance Berhad',phone:'03-2297 3888',fax:'03-2297 3800',email:'info@etiqa.com.my',address:'Level 19, Tower C, Dataran Maybank, No. 1, Jalan Maarof',city:'',state:'Kuala Lumpur',zipcode:59000,countryID:381},
//  {payorID:11,payorName:'Prudential Assurance Malaysia Berhad',phone:'03-2297 3888',fax:'03-2297 3800',email:'info@etiqa.com.my',address:'Level 19, Tower C, Dataran Maybank, No. 1, Jalan Maarof',city:'',state:'Kuala Lumpur',zipcode:59000,countryID:381},
//  {payorID:12,payorName:'Sun Life Malaysia Assurance Berhad',phone:'03-2297 3888',fax:'03-2297 3800',email:'info@etiqa.com.my',address:'Level 19, Tower C, Dataran Maybank, No. 1, Jalan Maarof',city:'',state:'Kuala Lumpur',zipcode:59000,countryID:381},
//  {payorID:13,payorName:'Tokio Marine Life Insurance Malaysia Bhd.',phone:'03-2297 3888',fax:'03-2297 3800',email:'info@etiqa.com.my',address:'Level 19, Tower C, Dataran Maybank, No. 1, Jalan Maarof',city:'',state:'Kuala Lumpur',zipcode:59000,countryID:381},
//  {payorID:14,payorName:'Gibraltar BSN Life Berhad',phone:'03-2297 3800',fax:'03-2297 3800',email:'info@etiqa.com.my',address:'Level 19, Tower C, Dataran Maybank, No. 1, Jalan Maarof',city:'',state:'Kuala Lumpur',zipcode:59000,countryID:381},
//  {payorID:15,payorName:'Zurich Insurance Malaysia Berhad',phone:'03-2297 3888',fax:'03-2297 3800',email:'info@etiqa.com.my',address:'Level 19, Tower C, Dataran Maybank, No. 1, Jalan Maarof',city:'',state:'Kuala Lumpur',zipcode:59000,countryID:381}
//];

  insuranceCtrl: FormControl;
  filteredInsurances: any;

  payorCtrl: FormControl;
  filteredPayors: any;

  gender = [
    'Male',
    'Female'
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



  constructor(private MDS: MasterDataService) {
    this.insuranceCtrl = new FormControl();
    this.filteredInsurances = this.insuranceCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterInsurances(name));

    //assign value for edit mode
    this.payorCtrl = new FormControl({payorID: 13, payorName: 'Tokio Marine Life Insurance Malaysia Bhd.'});

  }

  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.payorName : value;
  }

  filterInsurances(val: string) {
    return val ? this.insurances.filter((s) => new RegExp(val, 'gi').test(s)) : this.insurances;
  }

  filterPayors(val: string) {
    //`^${val}`
    return val ? this.payors.filter((s) => new RegExp(val, 'gi').test(s.payorName))
               : this.payors;
  }

  ngOnInit() {
    this.MDS.GetCountry().subscribe(countries => {
    this.countries = countries;});
    
    this.MDS.GetIdentificationType().subscribe(indetificationType => {
    this.IDtypes = indetificationType;});

    //this.MDS.GetInsurance().subscribe(insurance => {
    //this.insurances = insurance;});

    this.MDS.GetPayor().subscribe(payor => {
    this.payors = payor;

    //here only start filter
    this.filteredPayors = this.payorCtrl.valueChanges
        .startWith(this.payorCtrl.value)
        .map(val => this.displayFn(val))
        .map(name => this.filterPayors(name));

    });

    this.MDS.GetRelationship().subscribe(relationship => {
    this.relationship = relationship;});

    this.MDS.GetTitle().subscribe(title => {
    this.titles = title;});

    this.MDS.GetState().subscribe(state => {
    this.states = state;});
  }



}
