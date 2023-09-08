import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterNamesService } from '../router/router-names.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paths: RouterNamesService = null;

  constructor(
    private router: Router,
    private routerNames: RouterNamesService,
    private authService: AuthService
  ) { }

  toServer(id) {
    this.router.navigate([this.paths.SERVERS_PATH, id], { queryParams: { isAllowedToEdit: id % 2 !== 0 ? 1 : 0 }, fragment: 'loading' })
    console.log('Servers page is active');
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.paths = this.routerNames;
  }
}
