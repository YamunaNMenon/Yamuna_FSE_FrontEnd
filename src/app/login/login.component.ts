import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from '../services/authentication.service';
import { Router } from "@angular/router";
import { User } from "src/app/model/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  user: User ;
  credentials = { username: '', password: '' };
  constructor(private authService: AuthenticationService,private router: Router) { }

  ngOnInit() {
  }

  login() {
    const userName  = ((document.getElementById('email') as HTMLInputElement).value);
    const password  = ((document.getElementById('password') as HTMLInputElement).value);
    if ( userName === null || userName === undefined || userName === '' || userName === '') {
      this.errorMessage = 'Enter Username';
      alert('Enter Username');
      return false;
    }
    if ( password === null || password === undefined || password === '' || password === '') {
      this.errorMessage = 'Enter Password';
      alert('Enter password');
      return false;
    }
    this.saveUser(userName, password);
    this.authenticateUser();
    console.log('Logged In!!!!!!') ;
  }
  saveUser(userName,password){
    localStorage.setItem('username', this.credentials.username);
    localStorage.setItem('password', this.credentials.password);
  }
  authenticateUser(){
    /*this.authService.authenticate() ;
    this.authService.authenticate().subscribe((userResp: User) => {
      console.log('After service call in angular');
      this.user = userResp ;
      if (this.user.isUserAuthentic === 'true') {
        this.authService.setUserInLocalStrorage(this.user) ;
        this.router.navigate(['/dashboard']);
      }
      console.log(userResp);
    });*/
    this.router.navigate(['/dashboard']);
  }
  clearMessage() {
    this.errorMessage = '';
  }


}
