import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatBadge,
  MatCheckbox,
  MatDatepickerModule,
  MatFormFieldModule,
  MatGridList,
  MatGridTile,
  MatInputModule,
  MatList,
  MatListItem,
  MatNativeDateModule,
  MatRippleModule,
  MatSelectModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {OverlayModule} from '@angular/cdk/overlay';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import {AllLeaguesComponent} from './all-leagues/all-leagues.component';
import {LeagueDetailsComponent} from './league-details/league-details.component';
import {AddLeagueComponent} from './add-league/add-league.component';

@NgModule({
  declarations: [
    AppComponent,
    MatCheckbox,
    MatBadge,
    MatList,
    MatListItem,
    AllLeaguesComponent,
    MatGridList, MatGridTile, LeagueDetailsComponent, AddLeagueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRippleModule,
    OverlayModule,
    ScrollDispatchModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
