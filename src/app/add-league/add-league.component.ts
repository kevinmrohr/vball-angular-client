import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import * as moment from 'moment';
import {DayOfWeek} from "../model/DayOfWeek";

@Component({
  selector: 'app-add-league',
  templateUrl: './add-league.component.html',
  styleUrls: ['./add-league.component.css']
})
export class AddLeagueComponent implements OnInit {
  dayOfWeekControl = new FormControl('', [Validators.required]);
  leagueTypeControl = new FormControl('', [Validators.required]);
  startDateControl = new FormControl('', [Validators.required]);
  endDateControl = new FormControl('', [Validators.required]);
  selectedDayOfWeek: DayOfWeek;
  selectedLeagueType: string;
  daysOfWeek: DayOfWeek[] = [
    new DayOfWeek(0, 'Sunday'),
    new DayOfWeek(1, 'Monday'),
    new DayOfWeek(2, 'Tuesday'),
    new DayOfWeek(3, 'Wednesday'),
    new DayOfWeek(4, 'Thursday'),
    new DayOfWeek(5, 'Friday'),
    new DayOfWeek(6, 'Saturday')
  ];
  leagueTypes: string[] = ['Womens Doubles', 'Coed Quad C-2', 'Coed Quad C-1', 'Mens Quad BB', 'Mens Quad c-2', 'Coed Quad c-3', 'Mens Quad c-1', 'Cin-City Quad'];


  constructor() {
  }

  ngOnInit() {
  }

  potentialStartDates() {
    if (!this.selectedDayOfWeek) {
      return []
    }

    const nextDay = moment().day(this.selectedDayOfWeek.dayNum).add(1, 'weeks')

    return [nextDay.format('MM-dd-yyyy')]
  }

  potentialEndDates() {
    return [];
  }

  onDayOfWeekChange() {
    this.selectedDayOfWeek = this.daysOfWeek.find(d => d.dayNum === this.dayOfWeekControl.value);
  }
}
