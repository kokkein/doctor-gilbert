import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-brand',
  templateUrl: './inventory-brand.component.html',
  styleUrls: ['./inventory-brand.component.css']
})
export class InventoryBrandComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  inventoryBrandID;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryBrandID = +p['id'];
        if (this.data.inventoryBrandID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetInventoryBrandByID(this.data.inventoryBrandID)
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
      this.MasterDataService.GetInventoryBrand()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventoryBrandID){
      this.MasterDataService.UpdateInventoryBrandByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryBrandName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreateInventoryBrand(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryBrandName + '" Created Sucessfully!'});
      });
  }

}
