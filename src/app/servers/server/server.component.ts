import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  isAllowedToEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onEdit() {
    if (this.isAllowedToEdit) {
      this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' }); // another option in queryParamsHandling is 'merge
    }
  }

  // onChangeQuery() {
  //   this.router.navigate([], { queryParams: { isAllowedToEdit: 0 } })
  // }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.server = this.serversService.getServer(+id);

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params.id);
    })

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.isAllowedToEdit = +queryParams.isAllowedToEdit > 0;
    })
  }
}
