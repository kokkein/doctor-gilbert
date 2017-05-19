import { MasterDataService } from './services/masterdata.service';
import { EventService } from './services/EventService';
import { NodeService } from './services/NodeService';
import { CarService } from './services/carService';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent, DialogResultExampleDialog } from './app.component';
import { MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

//Project Component
import { PatientComponent } from './patient/patient.component';
import { VisitComponent } from './visit/visit.component';
import { VitalComponent } from './vital/vital.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { UserComponent } from './user/user.component';
import { EpisodeComponent } from './episode/episode.component';
import { DocumentComponent } from './episode/document/document.component';
import { RadiologyComponent } from './episode/radiology/radiology.component';
import { LaboratoryComponent } from './episode/laboratory/laboratory.component';
import { MedicationComponent } from './episode/medication/medication.component';
import { TimelineComponent } from './episode/timeline/timeline.component';
import { DiagnosisComponent } from './episode/diagnosis/diagnosis.component';
import { VitalSignsComponent } from './episode/vital-signs/vital-signs.component';
import { AppointmentComponent } from './appointment/appointment.component';

//Third Party Component
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { InputMaskModule } from 'primeng/primeng'; 
import { ChipsModule } from 'primeng/primeng'; 
import { EditorModule, SharedModule } from 'primeng/primeng';
import { TreeTableModule, TreeNode } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ScheduleModule, CalendarModule, CheckboxModule } from 'primeng/primeng';
import { DepartmentComponent } from './masterData/department/department.component';
import { InsuranceComponent } from './masterData/insurance/insurance.component';
import { PayorComponent } from './masterData/payor/payor.component';
import { MOHVisitTypeComponent } from './masterData/mohvisit-type/mohvisit-type.component';
import { PurposeOfVisitComponent } from './masterData/purpose-of-visit/purpose-of-visit.component';
import { MasterDataComponent } from './masterData/master-data.component';
import { GrowlModule } from 'primeng/primeng';


const appRoutes: Routes = [
{ path: 'appointment', component: AppointmentComponent},
{ path: 'patient', component: PatientComponent},
{ path: 'visit', component: VisitComponent},
{ path: 'vital', component: VitalComponent},
{ path: 'inventory-item', component: InventoryItemComponent},
{ path: 'user', component: UserComponent},
{ path: 'episode', component: EpisodeComponent},
{ path: 'master-data', component: MasterDataComponent},
{ path: 'payor', component: PayorComponent},
{ path: 'mohvisit-type', component: MOHVisitTypeComponent},
{ path: 'mohvisit-type/:id', component: MOHVisitTypeComponent},
{ path: 'insurance', component: InsuranceComponent},
{ path: 'purpose-of-visit', component: PurposeOfVisitComponent},
{ path: 'department', component: DepartmentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    VisitComponent,
    VitalComponent,
    InventoryComponent,
    InventoryItemComponent,
    UserComponent,
    EpisodeComponent,
    DocumentComponent,
    RadiologyComponent,
    LaboratoryComponent,
    MedicationComponent,
    TimelineComponent,
    DiagnosisComponent, 
    VitalSignsComponent, DialogResultExampleDialog, AppointmentComponent, DepartmentComponent, InsuranceComponent, PayorComponent, MOHVisitTypeComponent, PurposeOfVisitComponent, MasterDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule, RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule, FlexLayoutModule, GrowlModule, 
    InputMaskModule, ChipsModule, EditorModule, SharedModule, CheckboxModule,
    Ng2GoogleChartsModule, TreeTableModule, DataTableModule, DialogModule, ScheduleModule, CalendarModule
  ],
  providers: [NodeService, CarService, EventService, MasterDataService],
  entryComponents: [DialogResultExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
