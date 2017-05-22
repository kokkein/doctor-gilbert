import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";


@Component({
  selector: 'app-purpose-of-visit',
  templateUrl: './purpose-of-visit.component.html',
  styleUrls: ['./purpose-of-visit.component.css']
})
export class PurposeOfVisitComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  visitPurposeID;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.visitPurposeID = +p['id'];
        if (this.data.visitPurposeID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetPurposeOfVisitByID(this.data.visitPurposeID)
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
      this.MasterDataService.GetPurposeOfVisit()
        .subscribe(x => {
          this.dataList =x;
     });

  }

    onRowSelect(event) {
        this.router.navigate(['/purpose-of-visit/', event.data.visitPurposeID]);
    }

  onSave() {

    if (this.data.visitPurposeID){
      this.MasterDataService.UpdatePurposeOfVisitByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.visitPurposeName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreatePurposeOfVisit(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.visitPurposeName + '" Created Sucessfully!'});
      });
  }
}
