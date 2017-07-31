import { MasterDataService } from './../services/masterdata.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
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
  policies;
  policyCtrl: FormControl;
  filteredPolicies: any;
  doctors;
  doctorCtrl: FormControl;
  filteredDoctors: any;
  departments;
  departmentCtrl: FormControl;
  filteredDepartments: any;
  purposeOfVisits;
  purposeOfVisitCtrl: FormControl;
  filteredPurposeOfVisits: any;
  mohs;
  mohCtrl: FormControl;
  filteredMOHs: any;
  payors;
  payorCtrl: FormControl;
  filteredPayors: any;
  patients;
  patientCtrl: FormControl;
  filteredPatients: any;
  visitdata: any = {};

   constructor(private MasterDataService: MasterDataService) {

    //assign value for edit mode
    this.patientCtrl = new FormControl({patientID: 1, name: 'A very sick guy'});
    this.payorCtrl = new FormControl({payorID: 13, payorName: 'Tokio Marine Life Insurance Malaysia Bhd.'});
    this.mohCtrl = new FormControl({mohVisitTypeID: 2, mohVisitTypeName: 'Foreign'});
    this.purposeOfVisitCtrl = new FormControl({visitPurposeID: 2, visitPurposeName: 'New Visit'});
    this.departmentCtrl = new FormControl({departmentID: 1, departmentName: 'Accident & Emergency'});
    this.doctorCtrl = new FormControl({dgUserID: 1, userFullName: 'Gilbert Chin Kok Kein'});
    this.policyCtrl = new FormControl({insuranceID: 1, insuranceName: 'A-Plus Gen?Next'});

  }
  displayPolicyFn(value: any): string {
    return value && typeof value === 'object' ? value.insuranceName : value;
  }
  displayDoctorFn(value: any): string {
    return value && typeof value === 'object' ? value.userFullName : value;
  }
  displayDepartmentFn(value: any): string {
    return value && typeof value === 'object' ? value.departmentName : value;
  }
  displayPurposeOfVisitFn(value: any): string {
    return value && typeof value === 'object' ? value.visitPurposeName : value;
  }
  displayMOHFn(value: any): string {
    return value && typeof value === 'object' ? value.mohVisitTypeName : value;
  }
  displayPayorFn(value: any): string {
    return value && typeof value === 'object' ? value.payorName : value;
  }
  displayPatientFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }
  filterPolicies(val: string) {
    //`^${val}`
    return val ? this.policies.filter((s) => new RegExp(val, 'gi').test(s.insuranceName))
               : this.policies;
  }
  filterDoctors(val: string) {
    //`^${val}`
    return val ? this.doctors.filter((s) => new RegExp(val, 'gi').test(s.userFullName))
               : this.doctors;
  }
  filterDepartments(val: string) {
    //`^${val}`
    return val ? this.departments.filter((s) => new RegExp(val, 'gi').test(s.departmentName))
               : this.departments;
  }
  filterPurposeOfVisits(val: string) {
    //`^${val}`
    return val ? this.purposeOfVisits.filter((s) => new RegExp(val, 'gi').test(s.visitPurposeName))
               : this.purposeOfVisits;
  }
  filterMOHs(val: string) {
    //`^${val}`
    return val ? this.mohs.filter((s) => new RegExp(val, 'gi').test(s.mohVisitTypeName))
               : this.mohs;
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
    this.visitdata.VisitDateTime = "2017-08-12T15:14";
    this.MasterDataService.GetInsurance().subscribe(policy => {
    this.policies = policy;
    //here only start filter
    this.filteredPolicies = this.policyCtrl.valueChanges
        .startWith(this.policyCtrl.value)
        .map(val => this.displayPolicyFn(val))
        .map(name => this.filterPolicies(name));
    });

    this.MasterDataService.GetDGUser().subscribe(doctor => {
    this.doctors = doctor;
    //here only start filter
    this.filteredDoctors = this.doctorCtrl.valueChanges
        .startWith(this.doctorCtrl.value)
        .map(val => this.displayDoctorFn(val))
        .map(name => this.filterDoctors(name));
    });

    this.MasterDataService.GetDepartment().subscribe(department => {
    this.departments = department;
    //here only start filter
    this.filteredDepartments = this.departmentCtrl.valueChanges
        .startWith(this.departmentCtrl.value)
        .map(val => this.displayDepartmentFn(val))
        .map(name => this.filterDepartments(name));
    });

    this.MasterDataService.GetPurposeOfVisit().subscribe(purposeOfVisit => {
    this.purposeOfVisits = purposeOfVisit;
    //here only start filter
    this.filteredPurposeOfVisits = this.purposeOfVisitCtrl.valueChanges
        .startWith(this.purposeOfVisitCtrl.value)
        .map(val => this.displayPurposeOfVisitFn(val))
        .map(name => this.filterPurposeOfVisits(name));
    });

    this.MasterDataService.GetMOHVisitType().subscribe(moh => {
    this.mohs = moh;
    //here only start filter
    this.filteredMOHs = this.mohCtrl.valueChanges
        .startWith(this.mohCtrl.value)
        .map(val => this.displayMOHFn(val))
        .map(name => this.filterMOHs(name));
    });

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
