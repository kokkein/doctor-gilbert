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
    GetRelationship() {
        return this.http.get('http://localhost:5000/api/relationship')
                    .map(res => res.json());

    }
    GetTitle() {
        return this.http.get('http://localhost:5000/api/title')
                    .map(res => res.json());

    }
}
