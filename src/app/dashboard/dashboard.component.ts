import { Component, OnInit } from '@angular/core';
import { Route } from '../route';
import { RouteService } from '../route.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  routes: Route[] = [];
 
  constructor(private routeService: RouteService) { }
 
  ngOnInit() {
    this.getRoutes();
  }
 
  getRoutes(): void {
    this.routeService.getRoutes()
      .subscribe(routes => this.routes = routes.slice(1, 5));
  }
}