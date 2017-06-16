import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-medicationclass',
  templateUrl: './inventory-medicationclass.component.html',
  styleUrls: ['./inventory-medicationclass.component.css']
})
export class InventoryMedicationclassComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  inventoryGenericID;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryMedicationClassID = +p['id'];
        if (this.data.inventoryMedicationClassID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetInventoryMedicationClassByID(this.data.inventoryMedicationClassID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Info Message', detail:'Record Not Found!'});
          this.data = {};
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetInventoryMedicationClass()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventoryMedicationClassID){
      this.MasterDataService.UpdateInventoryMedicationClassByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryMedicationClassName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreateInventoryMedicationClass(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryMedicationClassName + '" Created Sucessfully!'});
      });
  }

}
