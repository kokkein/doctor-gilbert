import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {

  menuItems = [
    {name: 'Payor', overview: '/payor', newRecord: '/payor'},
    {name: 'Department', overview: '/department', newRecord: '/department'},
    {name: 'MOH Visit Type', overview: '/mohvisit-type', newRecord: '/mohvisit-type'},
    {name: 'Purpose Of Visit', overview: '/purpose-of-visit', newRecord: '/purpose-of-visit'},
    {name: 'User', overview: '/user', newRecord: '/user'},
    {name: 'Inventory', overview: '/inventory-item', newRecord: '/inventory-item'},
    {name: 'Insurance', overview: '/insurance', newRecord: '/insurance'}
  ];

  constructor() { }

    ngOnInit() {
    }

}
