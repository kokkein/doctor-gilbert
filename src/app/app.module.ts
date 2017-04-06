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


import { InputMaskModule } from 'primeng/primeng'; 
import { ChipsModule } from 'primeng/primeng';
import { VisitComponent } from './visit/visit.component';
import { VitalComponent } from './vital/vital.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { UserComponent } from './user/user.component';
import { EpisodeComponent } from './episode/episode.component';

//Third Party Component

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
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule, RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    BrowserAnimationsModule, FlexLayoutModule,
    InputMaskModule, ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
