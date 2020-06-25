import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  userName = '';
  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log('Imside header component!!!!' + this.isLoggedIn) ;

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.userName = user.username;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

    } else {
      this.router.navigate(['/']);
    }

  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
