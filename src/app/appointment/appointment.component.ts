import { Component, OnInit } from '@angular/core';
import { EventService } from './../services/EventService';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

    events: any[];
    header: any;
    event: MyEvent;
    dd: string;

    dialogVisible: boolean = false;
    
    idGen: number = 100;
    
    constructor(private eventService: EventService) { }

    ngOnInit() {
                this.events = [
            {
                "title": "All Day Event",
                "start": "2017-07-01T15:15:00"
            },
            {
                "title": "Long Event with end date",
                "start": "2017-07-07T18:18",
                "end": "2017-07-24T11:11"
            },
            {
                "title": "Repeating Event",
                "start": '2017-07-24T12:12'
            },
            {
                "title": "Repeating Event with time",
                "start": "2017-07-24T13:13",
                "allDay" : false,
                "descr": "This is a cool event"
            },
            {
                "title": "Conference for few day",
                "start": "2017-07-11T14:14",
                "end": "2017-07-13"
            }
        ];
        
        this.header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek,listMonth'
		};
    }
    
    handleDayClick(event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        
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
        var b: Date = new Date(e.calEvent.start);
        console.log(e.calEvent.start);
        this.event.start = e.calEvent.start;
        this.event.allDay = e.calEvent.allDay;
        this.event.descr = e.calEvent.descr;
        
        this.dd = e.calEvent.start._i; //"2017-07-24T13:13";

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
    allDay: boolean = true;
}