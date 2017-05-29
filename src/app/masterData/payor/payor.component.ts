import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-payor',
  templateUrl: './payor.component.html',
  styleUrls: ['./payor.component.css']
})
export class PayorComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  payorID;
  countries;
  states;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) { 
      route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.payorID = +p['id'];
        if (this.data.payorID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetPayorByID(this.data.payorID)
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
    this.MasterDataService.GetCountry().subscribe(countries => {
    this.countries = countries;});

    this.MasterDataService.GetState().subscribe(states => {
    this.states = states;});

  }

  onSave() {

    if (this.data.payorID){
      this.MasterDataService.UpdatePayorByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.payorName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreatePayor(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.payorName + '" Created Sucessfully!'});
      });
  }


}
