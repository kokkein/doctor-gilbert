import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    titles: any = [];
    specialities: any = [];
    states: any = [];
    countries: any = [];
    data: any = {};
    dataList: any = [];
    msgs: Message[] = [];
    dgUserID;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.dgUserID = +p['id'];
        if (this.data.dgUserID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetDGUserByID(this.data.dgUserID)
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
      this.MasterDataService.GetDGUser()
        .subscribe(x => {
          this.dataList =x;
     });
      this.MasterDataService.GetTitle()
        .subscribe(x => {
          this.titles =x;
     });
      this.MasterDataService.GetState()
        .subscribe(x => {
          this.states =x;
     });
      this.MasterDataService.GetCountry()
        .subscribe(x => {
          this.countries =x;
     });
      this.MasterDataService.GetSpeciality()
        .subscribe(x => {
          this.specialities =x;
     });
  }

  onSave() {

    if (this.data.dgUserID){
      this.MasterDataService.UpdateDGUserByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.userFullName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreateDGUser(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.userFullName + '" Created Sucessfully!'});
      });
  }

}

