import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-mohvisit-type',
  templateUrl: './mohvisit-type.component.html',
  styleUrls: ['./mohvisit-type.component.css']
})
export class MOHVisitTypeComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  mohVisitTypeID;
  
  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.mohVisitTypeID = +p['id'];
        if (this.data.mohVisitTypeID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetMOHVisitTypeByID(this.data.mohVisitTypeID)
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
      this.MasterDataService.GetMOHVisitType()
        .subscribe(x => {
          this.dataList =x;
     });

  }

    onRowSelect(event) {
        //this.msgs = [];
        //this.msgs.push({severity: 'info', summary: 'Selected', detail: event.data.mohVisitTypeID});
        this.router.navigate(['/mohvisit-type/', event.data.mohVisitTypeID]);
    }

  onSave() {

    if (this.data.mohVisitTypeID){
      this.MasterDataService.UpdateMOHVisitTypeByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.mohVisitTypeName + '" Updated Sucessfully!'});
            //this.router.navigate(['/home']);
      });
    }
    else
      this.MasterDataService.CreateMOHVisitType(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.mohVisitTypeName + '" Created Sucessfully!'});
      });
  }
}
