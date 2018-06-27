import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Route } from '../route';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {

  @Input() myRoute: Route;

  constructor(
    private route: ActivatedRoute,
    private routeService: RouteService,
    private location: Location    
  ) { }

  ngOnInit() {
    this.getRoute();
  }

  getRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.routeService.getRoute(id)
      .subscribe(myRoute => this.myRoute = myRoute);
  }
 
  goBack(): void {
    this.location.back();
  }  
}
