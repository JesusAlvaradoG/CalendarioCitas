import { Component, OnInit } from '@angular/core';


import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-Calendar',
  templateUrl: './Calendar.component.html',
  styleUrls: ['./Calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public events: any[];
  public options: any;
  
  
  

  constructor() { }

  ngOnInit() {

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin,interactionPlugin],
      defaulDate: new Date(),
      locale: esLocale,
      header:{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false,
      
    
      
    }
    
    this.events = [
      {
        
        
        title: "Evento 1",
        start: new Date(),
        description: "Evento 1",
        direccion:""
      },
      {
        title: "Evento 2",
        start: new Date(new Date().getTime() + 86400000 ),
        description: "Evento 2"
      },
      {
        title: "Evento 3",
        start: new Date(new Date().getTime() + (86400000 * 2) ),
        end: new Date(new Date().getTime() + (86400000 * 3) ),
        description: "Evento 3"
      },
    ]





  }

}
