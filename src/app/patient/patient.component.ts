import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

    data: any = {
      patientEmergencyResources: {},
      patientPolicyResources: {},
      patientEmployeeResources: {}
    };
    dataList: any = [];
    msgs: Message[] = [];
    dgUserID;
    inUse = true;
    countries;
    titles;
    IDtypes;
    relationship;
    payors;
    insurances;
    states;
    patientID;
    
    selectedCountry= 190;
    reactiveStates: any;
  
    tdDisabled = false;

    insuranceCtrl: FormControl;
    filteredInsurances: any;
  
    payorCtrl: FormControl;
    filteredPayors: any;

  gender = [
    'Male',
    'Female'
  ];


  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {
    this.payorCtrl = new FormControl({payorID: 0, payorName: ''});
    this.insuranceCtrl = new FormControl({insuranceID: 0, insuranceName: ''});

    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.patientID = +p['id'];
        if (this.data.patientID)
        {
          this.retrieveData();
        }
    });
  
  }

  displayPayorFn(value: any): string {
    return value && typeof value === 'object' ? value.payorName : value;
  }
  filterPayors(val: string) {
    //`^${val}`
    return val ? this.payors.filter((s) => new RegExp(val, 'gi').test(s.payorName))
               : this.payors;
  }
  displayInsuranceFn(value: any): string {
    return value && typeof value === 'object' ? value.insuranceName : value;
  }
  filterInsurances(val: string) {
    //`^${val}`
    return val ? this.insurances.filter((s) => new RegExp(val, 'gi').test(s.insuranceName))
               : this.insurances;
  }
  ngOnInit() {
    this.MasterDataService.GetCountry().subscribe(countries => {
    this.countries = countries;});
    
    this.MasterDataService.GetIdentificationType().subscribe(indetificationType => {
    this.IDtypes = indetificationType;});

    this.MasterDataService.GetPayor().subscribe(payor => {
    this.payors = payor;
    //here only start filter
    this.filteredPayors = this.payorCtrl.valueChanges
        .startWith(this.payorCtrl.value)
        .map(val => this.displayPayorFn(val))
        .map(name => this.filterPayors(name));
    });
    this.MasterDataService.GetInsurance().subscribe(insurance => {
    this.insurances = insurance;
    //here only start filter
    this.filteredInsurances = this.insuranceCtrl.valueChanges
        .startWith(this.insuranceCtrl.value)
        .map(val => this.displayInsuranceFn(val))
        .map(name => this.filterInsurances(name));
    });

    this.MasterDataService.GetRelationship().subscribe(relationship => {
    this.relationship = relationship;});

    this.MasterDataService.GetTitle().subscribe(title => {
    this.titles = title;});

    this.MasterDataService.GetState().subscribe(state => {
    this.states = state;});
  }

  onSave() {

    if (this.data.patientID){
      this.MasterDataService.UpdatePatientByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.name + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreatePatient(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.name + '" Created Sucessfully!'});
      });
  }
  retrieveData(){
      this.MasterDataService.GetPatientByID(this.data.patientID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Info Message', detail:'Record Not Found!'});
          this.data = {};
      } );
  }
}
