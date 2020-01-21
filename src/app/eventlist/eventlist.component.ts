import { Component, OnInit } from '@angular/core';
import { EventDetailsService } from 'src/app/services/event-details.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  dtOptions: any = {};
  eventList: any = {};

  constructor(private eventDetailsService: EventDetailsService) {
    this.eventList = [] ;
   }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom       : 'Bfrtip',
      buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ],
    };
    // const table: any = $('#table1');
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventDetailsService.getEventSummaryList().subscribe(eventSummaryList => {
      console.log(eventSummaryList);
      this.eventList = eventSummaryList;
    }) ;
  }

}
