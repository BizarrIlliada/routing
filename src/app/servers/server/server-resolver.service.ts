import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

interface Server {
  id: number;
  name: string;
  status: string;
}

import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

@Injectable({
  providedIn: 'root'
})
export class ServerResolver implements Resolve<Server> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    console.log('Route: ', route);
    console.log('State: ', state);
    
    return this.serversService.getServer(+route.params.id);
  }

  constructor(
    private serversService: ServersService
  ) { }
}
