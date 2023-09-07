import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterNamesService } from '../router/router-names.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paths: RouterNamesService = null;

  constructor(
    private router: Router,
    private routerNames: RouterNamesService
  ) { }

  toServer(id) {
    console.log('Servers page is active');

    this.router.navigate([this.paths.SERVERS_PATH, id, 'edit'], { queryParams: { allowEdit: id }, fragment: 'loading' })
  }

  ngOnInit() {
    this.paths = this.routerNames;
  }
}
