import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  departmentID;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.departmentID = +p['id'];
        if (this.data.departmentID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetDepartmentByID(this.data.departmentID)
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
      this.MasterDataService.GetDepartment()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.departmentID){
      this.MasterDataService.UpdateDepartmentByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.departmentName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreateDepartment(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.departmentName + '" Created Sucessfully!'});
      });
  }

}
