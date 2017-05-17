import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-mohvisit-type',
  templateUrl: './mohvisit-type.component.html',
  styleUrls: ['./mohvisit-type.component.css']
})
export class MOHVisitTypeComponent implements OnInit {

  data: any = {};
  msgs: Message[] = [];
  
  constructor(private MasterDataService: MasterDataService) { }

  ngOnInit() {
    this.data.active = true;
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
