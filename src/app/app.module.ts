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
import { MenuModule, TieredMenuModule } from 'primeng/primeng';
import { InventoryBrandComponent } from './masterData/inventory-brand/inventory-brand.component';
import { InventoryGenericComponent } from './masterData/inventory-generic/inventory-generic.component';
import { InventoryAtcComponent } from './masterData/inventory-atc/inventory-atc.component';
import { InventoryCategoryComponent } from './masterData/inventory-category/inventory-category.component';
import { InventorySubcategoryComponent } from './masterData/inventory-subcategory/inventory-subcategory.component';
import { InventoryMedicationclassComponent } from './masterData/inventory-medicationclass/inventory-medicationclass.component';
import { InventoryPregnancycategoryComponent } from './masterData/inventory-pregnancycategory/inventory-pregnancycategory.component';
import { SpecialityComponent } from './masterdata/speciality/speciality.component';

const appRoutes: Routes = [
{ path: 'appointment', component: AppointmentComponent},
{ path: 'patient', component: PatientComponent},
{ path: 'visit', component: VisitComponent},
{ path: 'vital', component: VitalComponent},
{ path: 'inventory-item', component: InventoryItemComponent},
{ path: 'inventory-item/:id', component: InventoryItemComponent},
{ path: 'user', component: UserComponent},
{ path: 'user/:id', component: UserComponent},
{ path: 'episode', component: EpisodeComponent},
{ path: 'master-data', component: MasterDataComponent},
{ path: 'payor', component: PayorComponent},
{ path: 'payor/:id', component: PayorComponent},
{ path: 'mohvisit-type', component: MOHVisitTypeComponent},
{ path: 'mohvisit-type/:id', component: MOHVisitTypeComponent},
{ path: 'insurance', component: InsuranceComponent},
{ path: 'insurance/:id', component: InsuranceComponent},
{ path: 'purpose-of-visit', component: PurposeOfVisitComponent},
{ path: 'purpose-of-visit/:id', component: PurposeOfVisitComponent},
{ path: 'department', component: DepartmentComponent},
{ path: 'department/:id', component: DepartmentComponent},
{ path: 'inventory-atc', component: InventoryAtcComponent},
{ path: 'inventory-atc/:id', component: InventoryAtcComponent},
{ path: 'inventory-brand', component: InventoryBrandComponent},
{ path: 'inventory-brand/:id', component: InventoryBrandComponent},
{ path: 'inventory-category', component: InventoryCategoryComponent},
{ path: 'inventory-category/:id', component: InventoryCategoryComponent},
{ path: 'inventory-generic', component: InventoryGenericComponent},
{ path: 'inventory-generic/:id', component: InventoryGenericComponent},
{ path: 'inventory-medicationclass', component: InventoryMedicationclassComponent},
{ path: 'inventory-medicationclass/:id', component: InventoryMedicationclassComponent},
{ path: 'inventory-pregnancycategory', component: InventoryPregnancycategoryComponent},
{ path: 'inventory-pregnancycategory/:id', component: InventoryPregnancycategoryComponent},
{ path: 'inventory-subcategory', component: InventorySubcategoryComponent},
{ path: 'inventory-subcategory/:id', component: InventorySubcategoryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    VisitComponent,
    VitalComponent,
    InventoryComponent,InventorySubcategoryComponent,InventoryPregnancycategoryComponent,
    InventoryItemComponent,InventoryMedicationclassComponent,InventoryGenericComponent,
    UserComponent,InventoryCategoryComponent,InventoryBrandComponent,InventoryAtcComponent,
    EpisodeComponent,
    DocumentComponent,
    RadiologyComponent,
    LaboratoryComponent,
    MedicationComponent,
    TimelineComponent,
    DiagnosisComponent, 
    VitalSignsComponent, DialogResultExampleDialog, AppointmentComponent, DepartmentComponent, InsuranceComponent, PayorComponent, MOHVisitTypeComponent, PurposeOfVisitComponent, MasterDataComponent, InventoryBrandComponent, InventoryGenericComponent, InventoryAtcComponent, InventoryCategoryComponent, InventorySubcategoryComponent, InventoryMedicationclassComponent, InventoryPregnancycategoryComponent, SpecialityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule, RouterModule.forRoot(appRoutes),
    MaterialModule, MenuModule,
    BrowserAnimationsModule, FlexLayoutModule, GrowlModule, TieredMenuModule,
    InputMaskModule, ChipsModule, EditorModule, SharedModule, CheckboxModule,
    Ng2GoogleChartsModule, TreeTableModule, DataTableModule, DialogModule, ScheduleModule, CalendarModule
  ],
  providers: [NodeService, CarService, EventService, MasterDataService],
  entryComponents: [DialogResultExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
