import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './Calendar/Calendar.component';
import { FullCalendarModule } from 'primeng/fullcalendar';



@NgModule({
  declarations: [	
    AppComponent,
      CalendarComponent
   ],
  imports: [
    BrowserModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
