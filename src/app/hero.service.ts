import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import { MessageService } from './message.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'
  constructor(private http:HttpClient, private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
  }
  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
