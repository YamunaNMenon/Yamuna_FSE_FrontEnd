import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceConstants } from '../shared/constants/service.constants';
import { Observable } from 'rxjs';

const AUTH_API = ServiceConstants.BASE_URL + ServiceConstants.AUTH_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API , {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  setUserInLocalStrorage(user) {
    localStorage.setItem('name', user.name);
    localStorage.setItem('email', user.emailId);
    localStorage.setItem('id', user.id);
    localStorage.setItem('role', user.role);
    localStorage.setItem('userAuthentic', user.isUserAuthentic);
  }
}
