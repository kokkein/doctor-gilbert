import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-mohvisit-type',
  templateUrl: './mohvisit-type.component.html',
  styleUrls: ['./mohvisit-type.component.css']
})
export class MOHVisitTypeComponent implements OnInit {

  data: any = {};
  msgs: Message[] = [];
  mohVisitTypeID;
  
  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      this.data.mohVisitTypeID = +p['id'];
    });
  }

  ngOnInit() {
    this.data.active = true;

    this.MasterDataService.GetMOHVisitTypeByID(this.data.mohVisitTypeID)
      .subscribe(m => {
        this.data = m;
      } );

  }

  onSave() {

    this.MasterDataService.CreateMOHVisitType(this.data)
      .subscribe(x => {
        console.log(x)
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.mohVisitTypeName + '" Created Sucessfully!'});
    });
  }
}
