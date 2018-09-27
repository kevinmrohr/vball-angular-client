import {Component, OnInit} from '@angular/core';
import {League} from "../model/League";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.css']
})
export class AllLeaguesComponent implements OnInit {
  dayOfWeekControl = new FormControl([], [Validators.required]);
  leagueTypeControl = new FormControl([], [Validators.required]);

  daysOfWeek: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  leagueTypes: string[] = ['womens doubles', 'coed quad c-2', 'coed quad c-1', 'mens Quad BB', 'mens quad c-2', 'coed cuad c-3', 'mens quad c-1', 'cin-city quad'];

  leagues: League[] = [];

  constructor() {
  }

  ngOnInit() {
  }


  getFilteredLeagues() {
    let filtered = this.leagues.slice(0);
    if (this.dayOfWeekControl.value && this.dayOfWeekControl.value.length > 0) {
      filtered = filtered.filter(l => this.dayOfWeekControl.value.some(s => l.dayOfWeek.toLowerCase().includes(s)))
    }

    if (this.leagueTypeControl.value && this.leagueTypeControl.value.length > 0) {
      filtered = filtered.filter(l => this.leagueTypeControl.value.some(s => l.leagueType.toLowerCase().includes(s)))
    }
    return filtered;
  }

}
