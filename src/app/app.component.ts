import { Component, OnInit } from '@angular/core';
import { RouterNamesService } from './router/router-names.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  paths: RouterNamesService = null;

  constructor(private routerNames: RouterNamesService) {}

  ngOnInit(): void {
    this.paths = { ...this.routerNames };
    console.log(this.paths);
  }
}
