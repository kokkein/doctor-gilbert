import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MdPaginator } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';



@Component({
  selector: 'app-diagnosis-master',
  templateUrl: './diagnosis-master.component.html',
  styleUrls: ['./diagnosis-master.component.css']
})
export class DiagnosisMasterComponent implements OnInit {
  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];

  displayedColumns = ['diagnosisCode', 'diagnosisDescription'];
  exampleDatabase = new ExampleDatabase(this.MasterDataService);
  dataSource: ExampleDataSource | null;


  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.diagnosisID = +p['id'];
        if (this.data.diagnosisID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
    this.MasterDataService.GetDiagnosisByID(this.data.diagnosisID)
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
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
}

onSave() {
  
    if (this.data.diagnosisID){
      this.MasterDataService.UpdateDiagnosisByID(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.diagnosisCode + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreateDiagnosis(this.data)
        .subscribe(x => {
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.diagnosisCode + '" Created Sucessfully!'});
      });
  }
  
}


export interface UserData {
  diagnosisID: number;
  diagnosisCode: string;
  diagnosisDescription: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {

  public dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value }

  constructor(private MasterDataService: MasterDataService) {
    this.MasterDataService.GetDiagnosis().subscribe(data => this.dataChange.next(data));
  }

}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}

