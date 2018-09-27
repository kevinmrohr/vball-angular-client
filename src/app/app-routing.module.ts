import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LeagueDetailsComponent} from "./league-details/league-details.component";
import {AllLeaguesComponent} from "./all-leagues/all-leagues.component";
import {AddLeagueComponent} from "./add-league/add-league.component";

const routes: Routes = [
  {path: '', redirectTo: '/league/list', pathMatch: 'full'},
  {path: 'league/details/:id', component: LeagueDetailsComponent},
  {path: 'league/add', component: AddLeagueComponent},
  {path: 'league/list', component: AllLeaguesComponent}
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
