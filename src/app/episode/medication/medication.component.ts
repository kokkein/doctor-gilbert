
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { MedicationList } from './MedicationList.interface';

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
    orderByCtrl: FormControl;
    filteredOrderBys: any;

    public myForm: FormGroup; // our form model
    
  constructor(private _fb: FormBuilder) { 
        this.medicationCtrl = new FormControl();
        this.filteredMedications = this.medicationCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterMedication(name));

        this.medicationTemplateCtrl = new FormControl();
        this.filteredMedicationTemplates = this.medicationTemplateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterMedicationTemplate(name));

        this.orderByCtrl = new FormControl();
        this.filteredOrderBys = this.orderByCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterOrderBy(name));
  }
  save(model: MedicationList) {
    // call API to save customer
    console.log(model);
}
  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      prescribeList: this._fb.array([
              this.initAddress(),
          ])
      });
  
  }

  initAddress() {
    // initialize our address
    return this._fb.group({
        dosage: [''],
        take: [''],
        time: [''],
        day: [''],
        totalQty: [''],
        uom: [''],
        price: [''],
        discPerc: [''],
        discAmt: [''],
        totalPrice: [''],
        route: [''],
        necessary: [''],
        instructionOne: [''],
        instructionTwo: [''],
        indication: [''],
    });
}

addAddress() {
// add address to the list
const control = <FormArray>this.myForm.controls['prescribeList'];
control.push(this.initAddress());
}

removeAddress(i: number) {
// remove address from the list
const control = <FormArray>this.myForm.controls['prescribeList'];
control.removeAt(i);
}

  uoms = [
    {value: 'TAB', viewValue: 'TAB'},
    {value: 'ML', viewValue: 'ML'},
    {value: 'Box', viewValue: 'Box'},
    {value: 'Saches', viewValue: 'Saches'},
  ];

  routes = [
    {value: 'ORAL', viewValue: 'ORAL'},
    {value: 'MOUTH', viewValue: 'MOUTH'},
    {value: 'EXTERNAL', viewValue: 'EXTERNAL'},
    {value: 'ASS', viewValue: 'ASS'},
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
    'MED001 - Panadol - 500 MG',
    'MED002 - Uphamol 650 TAB 500mg(Paracetamol)',
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

  orderBys = [
    'USER0001 - Doctor Gilbert',
    'USER0002 - Doctor Huey Yuh',
    'USER0003 - Doctor Dato Seri. Tan Seri. Abdullah Bin Dadawi',
    ];

  medicationRecord = [
    {
      id: 'PRESC-0003',
      medicationCode: 'MED002 - Uphamol 650 TAB 500mg(Paracetamol)',
      uom: 'PIECE',
      dosage: '1x2x3',
      dosageLabel: 'take 1 tables 3 times a days for 7 days via Rectal',
      route: 'Rectal',
      take: '1',
      time: '2',
      numberOfDay: '5',
      totalQty: '15',
      instruction1: 'Take after food',
      instruction2: 'Take more if required',
      indication: 'take all in one shoot',
      price: 'RM1.00',
      totalPrice: 'RM500.00',
      discount: 'RM10.00',
      note: 'This is a dangerous drug, take more to get more dangerous. take less also dangerous.',
      orderBy: 'Doctor Gilbert Chin',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
    {
      id: 'PRESC-0004',
      medicationCode: 'MED003 - Panadol 500mg (PARACEPTAMOL)',
      uom: 'PIECE',
      dosage: '2x2x3',
      dosageLabel: 'take 2 tables 3 times a days for 7 days via Oral',
      route: 'Oral',
      take: '2',
      time: '2',
      numberOfDay: '7',
      totalQty: '12',
      instruction1: 'Take after food',
      instruction2: '',
      indication: '',
      price: 'RM0.50',
      totalPrice: 'RM50.00',
      discount: 'RM10.00',
      note: '',
      orderBy: 'Doctor Gilbert Chin',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
    {
      id: 'PRESC-0008',
      medicationCode: 'MED008 - Syrup',
      uom: '100ml',
      dosage: '1x2x3',
      dosageLabel: 'take 1 tables 3 times a days for 7 days via Oral',
      route: 'Oral',
      take: '1',
      time: '2',
      numberOfDay: '5',
      totalQty: '15',
      instruction1: 'Take after food',
      instruction2: 'Take more if required',
      indication: 'take all in one shoot',
      price: 'RM1.00',
      totalPrice: 'RM500.00',
      discount: 'RM10.00',
      note: 'This is a dangerous drug, take more to get more dangerous. take less also dangerous.',
      orderBy: 'Doctor Gilbert Chin',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
  ];

  filterMedication(val: string) {
    return val ? this.medications.filter((s) => new RegExp(val, 'gi').test(s)) : this.medications;
  }

  filterMedicationTemplate(val: string) {
    return val ? this.medicationTemplates.filter((s) => new RegExp(val, 'gi').test(s)) : this.medicationTemplates;
  }

  filterOrderBy(val: string) {
    return val ? this.orderBys.filter((s) => new RegExp(val, 'gi').test(s)) : this.orderBys;
  }

}
