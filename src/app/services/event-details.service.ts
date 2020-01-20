import { Injectable } from '@angular/core';
import { EventDetails } from "src/app/model/eventDetails";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient,HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {private eventServiceUrl = environment.eventServiceUrl;
  private eventsummary: EventDetails;
  constructor(private httpClient: HttpClient) { }

 getEventSummaryList(): Observable<EventDetails> {
    return this.httpClient.get<EventDetails>(this.eventServiceUrl + 'getEvents');
  }

}
