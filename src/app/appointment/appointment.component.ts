import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterDataService } from './../services/masterdata.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from './../services/EventService';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

    events: any[];
    header: any;
    timeformat: any;
    event: MyEvent;
    startDT: string;
    endDT: string;
    purposeOfVisits;

    patients;
    patientCtrl: FormControl;
    filteredPatients: any;
    doctors;
    doctorCtrl: FormControl;
    filteredDoctors: any;
    dialogVisible: boolean = false;
    
    idGen: number = 100;
    
    constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router, private eventService: EventService) { 
        
    }

    ngOnInit() {
        this.events = [
            {
                "title": "All Day Event",
                "start": "2017-08-01T15:15:00",
                "end": "2017-08-01T15:45:00"
            },
            {
                "title": "Long Event with end date",
                "start": "2017-08-07T18:18",
                "end": "2017-08-24T11:11"
            },
            {
                "title": "Repeating Event",
                "start": "017-08-24T12:12",
                "end": "2017-08-24T15:15:00"
            },
            {
                "title": "Repeating Event with time",
                "start": "2017-08-24T13:13",
                "end": "2017-08-24T15:15",
                "allDay" : false,
                "descr": "This is a cool event"
            },
            {
                "title": "Conference for few day",
                "start": "2017-08-11T14:14",
                "end": "2017-08-13T20:00"
            }
        ];
        

        this.header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek,listMonth'
        };
        
        this.patientCtrl = new FormControl({patientID: 0, name: ''});
        this.doctorCtrl = new FormControl({dgUserID: 0, userFullName: ''});
        this.MasterDataService.GetPurposeOfVisit().subscribe(purposeOfVisit => {
        this.purposeOfVisits = purposeOfVisit;

        });

        this.MasterDataService.GetPatient().subscribe(patient => {
        this.patients = patient;
        //here only start filter
        this.filteredPatients = this.patientCtrl.valueChanges
            .startWith(this.patientCtrl.value)
            .map(val => this.displayPatientFn(val))
            .map(name => this.filterPatients(name));
        });

        this.MasterDataService.GetDGUser().subscribe(doctor => {
        this.doctors = doctor;
        //here only start filter
        this.filteredDoctors = this.doctorCtrl.valueChanges
            .startWith(this.doctorCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        });

    }

    displayPatientFn(value: any): string {
        return value && typeof value === 'object' ? value.name : value;
    }
    filterPatients(val: string) {
        //`^${val}`
        return val ? this.patients.filter((s) => new RegExp(val, 'gi').test(s.name))
                   : this.patients;
    }
    displayDoctorFn(value: any): string {
        return value && typeof value === 'object' ? value.userFullName : value;
    }
    filterDoctors(val: string) {
    //`^${val}`
        return val ? this.doctors.filter((s) => new RegExp(val, 'gi').test(s.userFullName))
               : this.doctors;
    }
    handleDayClick(event) {
        this.event = new MyEvent();
        //this.event.start = event.date.format('YYYY-MM-DDTHH:mm');
        this.event.start = event.date.format('YYYY-MM-DD') + 'T' + event.date.format('HH:mm');
        this.event.descr = moment(event.date.format('YYYY-MM-DD HH:mm')).add(30, 'm').format();
        this.event.end = moment(event.date.format('YYYY-MM-DD HH:mm')).add(30, 'm').format('YYYY-MM-DD') + 'T' + moment(event.date.format('YYYY-MM-DD HH:mm')).add(30, 'm').format('HH:mm');
        this.event.duration = 30;
        this.dialogVisible = true;
    }
    
    handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if(e.view.name === 'month') {
            start.stripTime();
        }
        
        if(end) {
            end.stripTime();
            this.event.end = end.format();
        }
        
        this.event.id = e.calEvent.id;
        this.event.start = e.calEvent.start;
        this.event.allDay = e.calEvent.allDay;
        this.event.descr = e.calEvent.descr;
        
        this.event.start = e.calEvent.start._i; //"2017-07-24T13:13";
        this.event.end = e.calEvent.end._i; //"2017-07-24T13:13";

        this.dialogVisible = true;
    }
    
    saveEvent() {
        //update
        if(this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if(index >= 0) {
                this.events[index] = this.event;
            }
        }
        //new
        else {
            this.event.id = this.idGen++;
            this.events.push(this.event);
            this.event = null;
        }
        
        this.dialogVisible = false;
    }
    
    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if(index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    
    findEventIndexById(id: number) {
        let index = -1;
        for(let i = 0; i < this.events.length; i++) {
            if(id == this.events[i].id) {
                index = i;
                break;
            }
        }
        
        return index;
    }
}

export class MyEvent {
    id: number;
    title: string;
    start: string;
    end: string;
    url: string;
    descr: string;
    duration: number;
    allDay: boolean = true;
}