import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-pregnancycategory',
  templateUrl: './inventory-pregnancycategory.component.html',
  styleUrls: ['./inventory-pregnancycategory.component.css']
})
export class InventoryPregnancycategoryComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  inventoryPregnancyCategoryID;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryPregnancyCategoryID = +p['id'];
        if (this.data.inventoryPregnancyCategoryID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetInventoryPregnancyCategoryByID(this.data.inventoryPregnancyCategoryID)
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
      this.MasterDataService.GetInventoryPregnancyCategory()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventoryPregnancyCategoryID){
      this.MasterDataService.UpdateInventoryPregnancyCategoryByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryPregnancyCategoryName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreateInventoryPregnancyCategory(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventoryPregnancyCategoryName + '" Created Sucessfully!'});
      });
  }

}

