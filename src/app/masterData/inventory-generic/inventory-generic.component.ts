import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-generic',
  templateUrl: './inventory-generic.component.html',
  styleUrls: ['./inventory-generic.component.css']
})
export class InventoryGenericComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  inventoryGenericID;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryGenericID = +p['id'];
        if (this.data.inventoryGenericID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetInventoryGenericByID(this.data.inventoryGenericID)
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
      this.MasterDataService.GetInventoryGeneric()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventoryGenericID){
      this.MasterDataService.UpdateInventoryGenericByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryGenericName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreateInventoryGeneric(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryGenericName + '" Created Sucessfully!'});
      });
  }

}
