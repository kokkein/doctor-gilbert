import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MasterDataService {
    
    sURL = "http://localhost:5000/api/"
    constructor(private http: Http) {}

    GetCountry() {
        return this.http.get(this.sURL + 'country')
                    .map(res => res.json());
    }
    GetIdentificationType() {
        return this.http.get(this.sURL + 'identificationtype')
                    .map(res => res.json());
    }
    GetInsurance() {
        return this.http.get(this.sURL + 'insurance')
                    .map(res => res.json());
    }
    GetInsuranceByID(id) {
        return this.http.get(this.sURL + 'insurance/' + id)
                    .map(res => res.json());
    }
    GetPayor() {
        return this.http.get(this.sURL + 'payor')
                    .map(res => res.json());
    }
    GetPayorByID(id) {
        return this.http.get(this.sURL + 'payor/' + id)
                    .map(res => res.json());
    }
    GetRelationship() {
        return this.http.get(this.sURL + 'relationship')
                    .map(res => res.json());
    }
    GetTitle() {
        return this.http.get(this.sURL + 'title')
                    .map(res => res.json());
    }
    GetState() {
        return this.http.get(this.sURL + 'state')
                    .map(res => res.json());
    }
    GetPatient() {
        return this.http.get(this.sURL + 'patientList')
                    .map(res => res.json());
    }
    GetMOHVisitType() {
        return this.http.get(this.sURL + 'MOHVisitType')
                    .map(res => res.json());
    }
    GetMOHVisitTypeByID(id) {
        return this.http.get(this.sURL + 'MOHVisitType/' + id)
                    .map(res => res.json());
    }
    GetPurposeOfVisit() {
        return this.http.get(this.sURL + 'VisitPurpose')
                    .map(res => res.json());
    }
    GetPurposeOfVisitByID(id) {
        return this.http.get(this.sURL + 'VisitPurpose/' + id)
                    .map(res => res.json());
    }
    GetDGUser() {
        return this.http.get(this.sURL + 'DGUser')
                    .map(res => res.json());
    }
    GetDepartment() {
        return this.http.get(this.sURL + 'Department')
                    .map(res => res.json());
    }
    GetDepartmentByID(id) {
        return this.http.get(this.sURL + 'Department/' + id)
                    .map(res => res.json());
    }


//Add Data
    CreatePurposeOfVisit(PurposeOfVisit) {
        return this.http.post(this.sURL + 'VisitPurpose', PurposeOfVisit)
                    .map(res => res.json());
    }
    CreateMOHVisitType(MOHVisitType) {
        return this.http.post(this.sURL + 'MOHVisitType', MOHVisitType)
                    .map(res => res.json());
    }
    CreatePayor(Payor) {
        return this.http.post(this.sURL + 'payor', Payor)
                    .map(res => res.json());
    }
    CreateDepartment(Department) {
        return this.http.post(this.sURL + 'department', Department)
                    .map(res => res.json());
    }
    CreateInsurance(Insurance) {
        return this.http.post(this.sURL + 'Insurance', Insurance)
                    .map(res => res.json());
    }

//Update Data
    UpdateMOHVisitTypeByID(MOHVisitType) {
        return this.http.put(this.sURL + 'MOHVisitType/' + MOHVisitType.mohVisitTypeID, MOHVisitType)
                    .map(res => res.json());
    }
    UpdatePurposeOfVisitByID(PurposeOfVisit) {
        return this.http.put(this.sURL + 'VisitPurpose/' + PurposeOfVisit.visitPurposeID, PurposeOfVisit)
                    .map(res => res.json());
    }
    UpdatePayorByID(Payor) {
        return this.http.put(this.sURL + 'payor/' + Payor.payorID, Payor)
                    .map(res => res.json());
    }
    UpdateDepartmentByID(Department) {
        return this.http.put(this.sURL + 'Department/' + Department.departmentID, Department)
                    .map(res => res.json());
    }
    UpdateInsuranceByID(Insurance) {
        return this.http.put(this.sURL + 'Insurance/' + Insurance.insuranceID, Insurance)
                    .map(res => res.json());
    }
}
