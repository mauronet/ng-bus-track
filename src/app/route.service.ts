import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
 
import { Route } from './route';
import { ROUTES } from './mock-routes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private messageService: MessageService) { }
 
  getRoutes(): Observable<Route[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('RouteService: fetched routes');
    return of(ROUTES);
  }

  getRoute(id: number): Observable<Route> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`RouteService: fetched route id=${id}`);
    return of(ROUTES.find(route => route.id === id));
  }  
}
