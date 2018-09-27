import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeagueComponent } from './add-league.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, MatSelectModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Directionality} from "@angular/cdk/bidi";
import {ScrollDispatcher, ViewportRuler} from '@angular/cdk/scrolling';
import {Subject} from "rxjs";

describe('AddLeagueComponent', () => {
  let component: AddLeagueComponent;
  let fixture: ComponentFixture<AddLeagueComponent>;
  let dir: {value: 'ltr'|'rtl'};
  let scrolledSubject = new Subject();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeagueComponent],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule],

      providers: [
        {provide: Directionality, useFactory: () => dir = {value: 'ltr'}},
        {
          provide: ScrollDispatcher, useFactory: () => ({
            scrolled: () => scrolledSubject.asObservable(),
          }),
        },
      ],
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
