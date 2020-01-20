import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { User } from "src/app/model/user";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authServerUrl = environment.authServerUrl;
  private user: User;

  constructor(private httpClient: HttpClient) { }
  authenticate(): Observable<any> {
    return this.httpClient.get<User>(this.authServerUrl + 'login');
  }
  setUserInLocalStrorage(user) {
    localStorage.setItem('name', user.name);
    localStorage.setItem('email', user.emailId);
    localStorage.setItem('id', user.id);
    localStorage.setItem('role', user.role);
    localStorage.setItem('userAuthentic', user.isUserAuthentic);
  }
}
