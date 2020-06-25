import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private authService: AuthenticationService, private router: Router, private AppComponent: AppComponent) {
    // this.authService.logout();
    localStorage.clear();
    // this.AppComponent.isloggin();
    this.router.navigate(['login']);
   }

  ngOnInit() {
  }

}
