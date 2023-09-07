import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RouterNamesService } from '../router/router-names.service';
import { AuthGuard } from "../auth-guard.service";

import { HomeComponent } from "../home/home.component";
import { ServersComponent } from "../servers/servers.component";
import { ServerComponent } from "../servers/server/server.component";
import { EditServerComponent } from "../servers/edit-server/edit-server.component";
import { UsersComponent } from "../users/users.component";
import { UserComponent } from "../users/user/user.component";
import { NotFoundPageComponent } from "../not-found-page/not-found-page.component";


const paths = new RouterNamesService();

const appRoutes: Routes = [
  {
    path: paths.HOME_PATH,
    component: HomeComponent,
  },
  {
    path: paths.SERVERS_PATH,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
      },
    ]
  },
  {
    path: paths.USERS_PATH,
    // canActivate: [AuthGuard],
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ]
  },
  {
    path: paths.NOT_FOUND_PATH,
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: paths.NOT_FOUND_PATH,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
