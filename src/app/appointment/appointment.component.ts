import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterDataService } from './../services/masterdata.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from './../services/EventService';
import { Message } from 'primeng/primeng';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
    
    data: any = {};
    events: any[];
    header: any;
    event: MyEvent;
    startDT: string;
    endDT: string;
    purposeOfVisits;
    msgs: Message[] = [];

    patients;
    patientCtrl: FormControl;
    filteredPatients: any;
    doctors;
    doctorCtrl: FormControl;
    filteredDoctors: any;
    dialogVisible: boolean = false;
    
    idGen: number = 900000000;
    
    constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router, private eventService: EventService) { 
        
    }

    onDateChanged(){
        var start = moment.utc(this.event.start, "HH:mm");
        var end = moment.utc(this.event.start, "HH:mm");
        
        // calculate the duration
        var d = moment.duration(end.diff(start));
        
        // format a string result
        var s = moment.utc(+d).format('H:mm');
        this.event.duration = d.asMinutes();
    }

    onDurationChanged(){
        this.event.end= moment(this.event.start).add(this.event.duration, 'm').format('YYYY-MM-DD') + 'T' + moment(this.event.start).add(this.event.duration, 'm').format('HH:mm');
    }

    ngOnInit() {
        this.events = [
            {
                "appointmentID": 1,
                "title": "All Day Event",
                "start": "2017-08-01T12:22:00",
                "end": "2017-08-01T12:12:00"
            },
            {
                "appointmentID": 2,
                "title": "Long Event with end date",
                "start": "2017-08-07T18:18:00",
                "end": "2017-08-24T11:11:00"
            },
            {
                "appointmentID": 3,
                "title": "Repeating Event",
                "start": "017-08-24T12:12:00",
                "end": "2017-08-24T15:15:00"
            },
        ];
        
        this.MasterDataService.GetAppointment().subscribe(appointment => {
            this.events = appointment;
        });

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
        this.patientCtrl = new FormControl({patientID: 0, name: ''});
        this.doctorCtrl = new FormControl({dgUserID: 0, userFullName: ''});

        this.event.start = event.date.format('YYYY-MM-DD') + 'T' + event.date.format('HH:mm');
        this.event.end = moment(event.date.format('YYYY-MM-DD HH:mm')).add(30, 'm').format('YYYY-MM-DD') + 'T' + moment(event.date.format('YYYY-MM-DD HH:mm')).add(30, 'm').format('HH:mm');
        this.event.duration = 30;
        this.dialogVisible = true;
    }
    
    handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        
        let start = e.calEvent.start;
        let end = e.calEvent.end;
  /*
        if(e.view.name === 'month') {
            start.stripTime();
        }
        
        if(end) {
            end.stripTime();
            this.event.end = end.format();
        }
        */

        this.patientCtrl = new FormControl({patientID: 0, name: ''});
        this.doctorCtrl = new FormControl({dgUserID: 0, userFullName: ''});



        this.event.appointmentID = e.calEvent.appointmentID;
        this.event.start = e.calEvent.start;
        this.event.allDay = e.calEvent.allDay;
        this.event.duration = e.calEvent.duration;
        this.event.mobile = e.calEvent.mobile;
        this.event.phone = e.calEvent.phone;
        this.event.email = e.calEvent.email;
        this.event.visitPurposeID = e.calEvent.visitPurposeID;
        this.event.description = e.calEvent.description;
        this.event.gender = e.calEvent.gender;
        this.event.visitDepartmentID = e.calEvent.visitDepartmentID;
        this.event.start = moment(e.calEvent.start).format('YYYY-MM-DDTHH:mm');
        this.event.end = moment(e.calEvent.end).format('YYYY-MM-DDTHH:mm'); 
        if (e.calEvent.patientID != undefined || e.calEvent.patientID != null) {
            let patientID
            if (this.event.appointmentID < 900000000) {
                patientID = e.calEvent.patientID;
            }
            else
                {
                patientID = e.calEvent.patientID.patientID;
            }
            this.event.patientID = patientID;
            this.MasterDataService.GetPatientByID(patientID)
            .subscribe(i =>{
                this.patientCtrl = new FormControl({patientID: i.patientID, name: i.name});
            })
        }
        if (e.calEvent.visitDoctorID != undefined || e.calEvent.visitDoctorID != null){
            let visitDoctorID
            if (this.event.appointmentID < 900000000) {
                visitDoctorID = e.calEvent.visitDoctorID;
            }
            else
                {
                visitDoctorID = e.calEvent.visitDoctorID.dgUserID;
            }

            this.event.visitDoctorID = visitDoctorID;
            this.MasterDataService.GetDGUserByID(visitDoctorID)
            .subscribe(i =>{
                this.doctorCtrl = new FormControl({dgUserID: i.dgUserID, userFullName: i.userFullName});
            })
        }




        this.dialogVisible = true;
    }
    
    saveEvent() {
        //update
        if (this.event.appointmentID) {
            let index: number = this.findEventIndexById(this.event.appointmentID);
            if(index >= 0) {
                this.events[index] = this.event;
            }
        }
        //new
        else {
            this.event.appointmentID = this.idGen++;
            this.events.push(this.event);
            //this.event = null;
        }

        this.dialogVisible = false;
        
        // > 900000000 means is newly created appointment
        if (this.event.appointmentID < 900000000){
            this.data.appointmentID = this.event.appointmentID;
        }
        
        this.data.title = this.event.title;
        this.data.start = this.event.start;
        this.data.end= this.event.end;
        this.data.duration = this.event.duration;
        this.data.description = this.event.description;
        this.data.allDay = this.event.allDay;

        this.data.mobile = this.event.mobile;
        this.data.phone = this.event.phone;
        this.data.email = this.event.email;
        this.data.visitPurposeID = this.event.visitPurposeID;
        this.data.gender = this.event.gender ;
        this.data.visitDepartmentID = this.event.visitDepartmentID;
        if (this.event.patientID != undefined || this.event.patientID != null){
            this.data.patientID = this.event.patientID;
        }
        if (this.event.visitDoctorID != undefined || this.event.visitDoctorID != null){
            this.data.visitDoctorID = this.event.visitDoctorID;
        }
        

        this.onSave();
    }

    onSave() {
        if (this.data.appointmentID){
          this.MasterDataService.UpdateAppointmentByID(this.data)
            .subscribe(x => {
                this.msgs = [];
                this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.title + '" Updated Sucessfully!'});
          });
        }
        else
          this.MasterDataService.CreateAppointment(this.data)
            .subscribe(x => {
                this.msgs = [];
                this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.title + '" Created Sucessfully!'});
          });
        
        //Reset value, else keep in cache
        this.patientCtrl = new FormControl({patientID: 0, name: ''});
        this.doctorCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    }
    
    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.appointmentID);
        if(index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    
    findEventIndexById(id: number) {
        let index = -1;
        for(let i = 0; i < this.events.length; i++) {
            if(id == this.events[i].appointmentID) {
                index = i;
                break;
            }
        }
        
        return index;
    }
}

export class MyEvent {
    appointmentID: number;
    start: string;
    end: string;
    duration: number;
    title: string;
    description: string;
    createdByID: number;
    visitPurposeID: number;
    allDay: boolean = false;
    patientID: number;
    visitDoctorID: number;
    mobile: string;
    phone: string;
    email: string;
    gender: string;
    visitDepartmentID: number;
}