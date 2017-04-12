
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Car } from '../episode/laboratory/Ilaboratory';


@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('src/app/cars-small.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }

    getCarsMedium() {
        return this.http.get('src/app/cars-medium.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }

    getCarsLarge() {
        return this.http.get('src/app/cars-large.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }
}