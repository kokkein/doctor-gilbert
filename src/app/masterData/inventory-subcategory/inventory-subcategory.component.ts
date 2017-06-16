import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-subcategory',
  templateUrl: './inventory-subcategory.component.html',
  styleUrls: ['./inventory-subcategory.component.css']
})
export class InventorySubcategoryComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  inventorySubCategoryID;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventorySubCategoryID = +p['id'];
        if (this.data.inventorySubCategoryID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetInventorySubCategoryByID(this.data.inventorySubCategoryID)
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
      this.MasterDataService.GetInventorySubCategory()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventorySubCategoryID){
      this.MasterDataService.UpdateInventorySubCategoryByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventorySubCategoryName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreateInventorySubCategory(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.inventorySubCategoryName + '" Created Sucessfully!'});
      });
  }

}
