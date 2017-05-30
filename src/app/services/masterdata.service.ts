import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MasterDataService {

    constructor(private http: Http) {}

    GetCountry() {
        return this.http.get('http://localhost:5000/api/country')
                    .map(res => res.json());

    }
    GetIdentificationType() {
        return this.http.get('http://localhost:5000/api/identificationtype')
                    .map(res => res.json());

    }
    GetInsurance() {
        return this.http.get('http://localhost:5000/api/insurance')
                    .map(res => res.json());

    }
    GetPayor() {
        return this.http.get('http://localhost:5000/api/payor')
                    .map(res => res.json());
    }
    GetPayorByID(id) {
        return this.http.get('http://localhost:5000/api/payor/' + id)
                    .map(res => res.json());
    }
    GetRelationship() {
        return this.http.get('http://localhost:5000/api/relationship')
                    .map(res => res.json());
    }
    GetTitle() {
        return this.http.get('http://localhost:5000/api/title')
                    .map(res => res.json());
    }
    GetState() {
        return this.http.get('http://localhost:5000/api/state')
                    .map(res => res.json());
    }
    GetPatient() {
        return this.http.get('http://localhost:5000/api/patientList')
                    .map(res => res.json());
    }
    GetMOHVisitType() {
        return this.http.get('http://localhost:5000/api/MOHVisitType')
                    .map(res => res.json());
    }
    GetMOHVisitTypeByID(id) {
        return this.http.get('http://localhost:5000/api/MOHVisitType/' + id)
                    .map(res => res.json());
    }
    GetPurposeOfVisit() {
        return this.http.get('http://localhost:5000/api/VisitPurpose')
                    .map(res => res.json());
    }
    GetPurposeOfVisitByID(id) {
        return this.http.get('http://localhost:5000/api/VisitPurpose/' + id)
                    .map(res => res.json());
    }
    GetDGUser() {
        return this.http.get('http://localhost:5000/api/DGUser')
                    .map(res => res.json());
    }
    GetDepartment() {
        return this.http.get('http://localhost:5000/api/Department')
                    .map(res => res.json());
    }
    GetDepartmentByID(id) {
        return this.http.get('http://localhost:5000/api/Department/' + id)
                    .map(res => res.json());
    }


//Add Data
    CreatePurposeOfVisit(PurposeOfVisit) {
        return this.http.post('http://localhost:5000/api/VisitPurpose', PurposeOfVisit)
                    .map(res => res.json());
    }
    CreateMOHVisitType(MOHVisitType) {
        return this.http.post('http://localhost:5000/api/MOHVisitType', MOHVisitType)
                    .map(res => res.json());
    }
    CreatePayor(Payor) {
        return this.http.post('http://localhost:5000/api/payor', Payor)
                    .map(res => res.json());
    }
    CreateDepartment(Department) {
        return this.http.post('http://localhost:5000/api/department', Department)
                    .map(res => res.json());
    }

//Update Data
    UpdateMOHVisitTypeByID(MOHVisitType) {
        return this.http.put('http://localhost:5000/api/MOHVisitType/' + MOHVisitType.mohVisitTypeID, MOHVisitType)
                    .map(res => res.json());
    }
    UpdatePurposeOfVisitByID(PurposeOfVisit) {
        return this.http.put('http://localhost:5000/api/VisitPurpose/' + PurposeOfVisit.visitPurposeID, PurposeOfVisit)
                    .map(res => res.json());
    }
    UpdatePayorByID(Payor) {
        return this.http.put('http://localhost:5000/api/payor/' + Payor.payorID, Payor)
                    .map(res => res.json());
    }
    UpdateDepartmentByID(Department) {
        return this.http.put('http://localhost:5000/api/Department/' + Department.departmentID, Department)
                    .map(res => res.json());
    }
}
