import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../home/home.component";
import { ServersComponent } from "../servers/servers.component";
import { ServerComponent } from "../servers/server/server.component";
import { EditServerComponent } from "../servers/edit-server/edit-server.component";
import { UsersComponent } from "../users/users.component";
import { UserComponent } from "../users/user/user.component";
import { NotFoundPageComponent } from "../not-found-page/not-found-page.component";

import routerNames from "./router-names";

const appRoutes: Routes = [
  {
    path: routerNames.HOME_PATH,
    component: HomeComponent,
  },
  {
    path: routerNames.SERVERS_PATH,
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
    path: routerNames.USERS_PATH,
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ]
  },
  {
    path: routerNames.NOT_FOUND_PATH,
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: routerNames.NOT_FOUND_PATH,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
