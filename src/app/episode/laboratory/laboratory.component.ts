
import { Component, OnInit } from '@angular/core';
import { TreeTableModule, TreeNode } from 'primeng/primeng';
import { NodeService } from './../../services/NodeService';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

    orderByCtrl: FormControl;
    filteredOrderBys: any;
    files: TreeNode[];
    selectedFiles: TreeNode[];

    displayDialog: boolean;

    constructor(private nodeService: NodeService) {
        this.orderByCtrl = new FormControl();
        this.filteredOrderBys = this.orderByCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterOrderBy(name));
    }
    
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
    }
 
    nodeSelect(event) {
        //event.node = selected node
    }

  priorities = [
    'Urgent',
    'Stat',
    'Routine'
  ];

laboratories = [
    {value: '1', viewValue: 'Quantum Laboratory (Shah Alam) Sdn. Bhd.'},
    {value: '2', viewValue: 'Wellness lab Cheras Taman Midah Sdn. Bhd'},
    {value: '3', viewValue: 'BP Lab Sdn. Bhd.'}
  ];

  orderBys = [
    'USER0001 - Doctor Gilbert',
    'USER0002 - Doctor Huey Yuh',
    'USER0003 - Doctor Dato Seri. Tan Seri. Abdullah Bin Dadawi',
    ];

  filterOrderBy(val: string) {
    return val ? this.orderBys.filter((s) => new RegExp(val, 'gi').test(s)) : this.orderBys;
  }

    laboratoryRecord = [
    {
      id: 'LAB-0003',
      laboratory: 'Wellness lab Cheras Taman Midah Sdn. Bhd',
      refferedBy: 'Doctor Lai from LAI Clinic',
      replyTo: '',
      reportedBy: 'Doctor Joo',
      priority: 'Routine',
      sampleDateTime: new Date('1/1/16'),
      note: 'This is a dangerous drug, take more to get more dangerous. take less also dangerous.',
      orderBy: 'Doctor Gilbert Chin',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
    {
      id: 'LAB-0004',
      laboratory: 'Quantum Laboratory (Shah Alam) Sdn. Bhd.',
      refferedBy: 'Doctor Lai from LAI Clinic',
      replyTo: '',
      reportedBy: 'Doctor Khoo',
      priority: 'Routine',
      sampleDateTime: new Date('1/1/16'),
      note: 'This Patient is pregnant!',
      orderBy: 'Doctor Gilbert Chin',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
    {
      id: 'LAB-0005',
      laboratory: 'Wellness lab Cheras Taman Midah Sdn. Bhd',
      refferedBy: 'Doctor Lai from LAI Clinic',
      replyTo: 'Ward A',
      reportedBy: 'Doctor Khoo',
      priority: 'Stat',
      sampleDateTime: new Date('1/1/16'),
      note: 'This is a dangerous drug, take more to get more dangerous. take less also dangerous.',
      orderBy: 'Doctor Gilbert Chin',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
  ];


}
