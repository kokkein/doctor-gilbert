import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  titles = [
    {value: 'Tun', viewValue: 'Tun'},
    {value: 'Tan Seri', viewValue: 'Tan Seri'},
    {value: 'Dato Seri', viewValue: 'Dato Seri'},
    {value: 'Dato', viewValue: 'Dato'},
    {value: 'Datin', viewValue: 'Datin'},
    {value: 'Doctor', viewValue: 'Doctor'},
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Mrs', viewValue: 'Mrs'}
  ];

  specialities = [
    {value: 'Ortopedic', viewValue: 'Ortopedic'},
    {value: 'Cardiology', viewValue: 'Cardiology'},
    {value: 'Gastrology', viewValue: 'Gastrology'},
    {value: 'Pediatric', viewValue: 'Pediatric'},
    {value: 'Denties', viewValue: 'Denties'}
  ];
  states = [
    {value: 'Kuala Lumpur', viewValue: 'Kuala Lumpur'},
    {value: 'Selangor', viewValue: 'Selangor'},
    {value: 'Cyberjaya', viewValue: 'Cyberjaya'},
    {value: 'Perak', viewValue: 'Perak'},
    {value: 'Pahang', viewValue: 'Pahang'},
    {value: 'Johor', viewValue: 'Johor'},
    {value: 'Sabah', viewValue: 'Sabah'},
    {value: 'Penang', viewValue: 'Penang'}
  ];

  countries = [
    {value: 'Malaysia', viewValue: 'Malaysia'},
    {value: 'Indonesia', viewValue: 'Indonesia'},
    {value: 'Thailand', viewValue: 'Thailand'},
    {value: 'England', viewValue: 'England'},
    {value: 'Australia', viewValue: 'Australia'},
    {value: 'Germany', viewValue: 'Germany'},
    {value: 'Singapore', viewValue: 'Singapore'},
    {value: 'Japan', viewValue: 'Japan'}
  ];

}
