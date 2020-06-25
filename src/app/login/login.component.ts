import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  user: User ;
  credentials = { username: '', password: '' };

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(private authService: AuthenticationService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  login() {
      this.errorMessage = '' ;
      if (this.isNullChk(this.credentials.username) && this.isNullChk(this.credentials.password)) {
       this.errorMessage = 'Enter Username and Password';
       return false;
      } else if (this.isNullChk(this.credentials.username)) {
        this.errorMessage = 'Username missing';
        return false;
      } else if (this.isNullChk(this.credentials.password)) {
        this.errorMessage = 'Password missing';
        return false;
      }
      this.saveUser(this.credentials.username, this.credentials.password);
      this.authenticateUserDetails();
      console.log('Login successful') ;
    }

    isNullChk(value) {
      return value ? false : true ;
    }

    saveUser(userName, password) {
      localStorage.setItem('username', this.credentials.username);
      localStorage.setItem('password', this.credentials.password);
    }
    authenticateUserDetails() {
      this.authService.login(this.credentials).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.router.navigate(['/dashboard']);
        }
      );
    }
    clearMessage() {
      this.errorMessage = '';
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnDestroy(): void {
    }
}
