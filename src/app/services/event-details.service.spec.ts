
import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventDetailsService } from './event-details.service';

describe('EventDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [HttpClient, EventDetailsService]
  }));

  it('should be created', () => {
    const service: EventDetailsService = TestBed.get(EventDetailsService);
    expect(service).toBeTruthy();
  });
});
