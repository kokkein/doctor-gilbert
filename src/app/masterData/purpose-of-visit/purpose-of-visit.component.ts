import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";


@Component({
  selector: 'app-purpose-of-visit',
  templateUrl: './purpose-of-visit.component.html',
  styleUrls: ['./purpose-of-visit.component.css']
})
export class PurposeOfVisitComponent implements OnInit {

  data: any = {};

  msgs: Message[] = [];

  constructor(private MasterDataService: MasterDataService) { }

  ngOnInit() {
    this.data.Active = true;
  }

  onSave() {

    this.MasterDataService.CreatePurposeOfVisit(this.data)
      .subscribe(x => {
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Info Message', detail:x});
        });


  }

}
