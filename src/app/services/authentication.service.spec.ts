
import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { User } from '../model/user';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [HttpClient, AuthenticationService]

  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    const user: User = {
      id: '1',
      name: 'admin',
      emailId: 'admin@test.com',
      role: 'admin',
      isUserAuthentic: 'y',
    } ;
    service.setUserInLocalStrorage(user) ;
    expect(service).toBeTruthy();
  });

});
