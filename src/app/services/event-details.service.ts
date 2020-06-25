import { Injectable } from '@angular/core';
import { EventDetails } from 'src/app/model/eventDetails';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient , HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ServiceConstants } from '../shared/constants/service.constants';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {

  private eventsummary: EventDetails;
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ })
  };

  getAllEvents$(): Observable<any> {
    return this.httpClient.post(ServiceConstants.BASE_URL + ServiceConstants.EVENTS_LIST, this.httpOptions );
  }

}
