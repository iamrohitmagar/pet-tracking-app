import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{
  petType : any;;
  petName : any;
  petSpending : any;
  routeParamsObj = {};
  userName : any;
  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("name");
    this.petType = this.activatedRoute.snapshot.queryParamMap.get('petType');
    this.petName = this.activatedRoute.snapshot.queryParamMap.get('petName')
    this.petSpending = this.activatedRoute.snapshot.queryParamMap.get('petSpending')
  }

}
