import {Component, OnInit} from '@angular/core';
import {League} from "../model/League";

@Component({
  selector: 'app-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.css']
})
export class AllLeaguesComponent implements OnInit {
  selectedDayOfWeek: string[] = [];
  selectedLeagueType: string[] = [];

  daysOfWeek: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  leagueTypes: string[] = ['womens doubles', 'coed quad c-2', 'coed quad c-1', 'mens Quad BB', 'mens quad c-2', 'coed cuad c-3', 'mens quad c-1', 'cin-city quad'];

  leagues: League[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  getFilteredLeagues() {
    let filtered = this.leagues.slice(0);
    if (this.selectedDayOfWeek && this.selectedDayOfWeek.length > 0) {
      filtered = filtered.filter(l => this.selectedDayOfWeek.some(s => l.dayOfWeek.toLowerCase().includes(s)))
    }

    if (this.selectedLeagueType && this.selectedLeagueType.length > 0) {
      filtered = filtered.filter(l => this.selectedLeagueType.some(s => l.leagueType.toLowerCase().includes(s)))
    }
    return filtered;
  }

}
