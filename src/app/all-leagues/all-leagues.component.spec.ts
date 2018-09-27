import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllLeaguesComponent} from './all-leagues.component';
import {MatFormFieldModule, MatSelectModule, MatGridTile, MatGridList, MatListItem, MatList, MatRippleModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Directionality} from "@angular/cdk/bidi";
import {ScrollDispatcher} from '@angular/cdk/scrolling';
import {Subject} from "rxjs";
import { RouterTestingModule } from '@angular/router/testing';

describe('AllLeaguesComponent', () => {
  let component: AllLeaguesComponent;
  let fixture: ComponentFixture<AllLeaguesComponent>;
  let dir: { value: 'ltr' | 'rtl' };
  let scrolledSubject = new Subject();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
        RouterModule,
        RouterTestingModule,
        MatRippleModule
      ],

      providers: [
        {provide: Directionality, useFactory: () => dir = {value: 'ltr'}},
        {
          provide: ScrollDispatcher, useFactory: () => ({
            scrolled: () => scrolledSubject.asObservable(),
          }),
        },
      ],
      declarations: [AllLeaguesComponent, MatGridTile, MatGridList, MatListItem, MatList]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

