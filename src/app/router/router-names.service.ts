import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterNamesService {
  readonly HOME_PATH = '';
  readonly SERVERS_PATH = 'servers';
  readonly USERS_PATH = 'users';
  readonly NOT_FOUND_PATH = 'not-found';

  constructor() { }
}
