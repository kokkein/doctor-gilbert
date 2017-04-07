import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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

//Third Party Component
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { InputMaskModule } from 'primeng/primeng'; 
import { ChipsModule } from 'primeng/primeng';
import { EditorModule, SharedModule } from 'primeng/primeng';

const appRoutes: Routes = [
{ path: 'patient', component: PatientComponent},
{ path: 'visit', component: VisitComponent},
{ path: 'vital', component: VitalComponent},
{ path: 'inventory-item', component: InventoryItemComponent},
{ path: 'user', component: UserComponent},
{ path: 'episode', component: EpisodeComponent},
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
    DiagnosisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule, RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    BrowserAnimationsModule, FlexLayoutModule,
    InputMaskModule, ChipsModule, EditorModule, SharedModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
