import { Car } from './Ilaboratory';
import { Component, OnInit } from '@angular/core';
import { TreeTableModule, TreeNode } from 'primeng/primeng';
import { NodeService } from './../../services/NodeService';
import { CarService } from './../../services/carService';
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
    car: Car = new PrimeCar();
    selectedCar: Car;
    newCar: boolean;
    cars: Car[];

    constructor(private nodeService: NodeService, private carService: CarService) {
        this.orderByCtrl = new FormControl();
        this.filteredOrderBys = this.orderByCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterOrderBy(name));
    }
    
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.carService.getCarsSmall().then(cars => this.cars = cars);
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

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    
    save() {
        if(this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;
        
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Car): Car {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

class PrimeCar implements Car {
    
    constructor(public vin?, public year?, public brand?, public color?) {}
}