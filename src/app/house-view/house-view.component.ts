import { Component, OnInit } from '@angular/core';
import {Route , ActivatedRoute, Router} from '@angular/router' 
import { DataFetchFromAPIService } from '../data-fetch-from-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  public currentHouse

  constructor(private activatedRoute: ActivatedRoute, public dataFetchFromApi: DataFetchFromAPIService, private _router: Router, private Location : Location) { }

  ngOnInit() {
    let currentId= this.activatedRoute.snapshot.paramMap.get('houseId');
    console.log(currentId);
    let parsedUrlToGetId = currentId.split('/');
    console.log(parsedUrlToGetId);
    console.log("Check the last element");
    let houseId= parsedUrlToGetId[parsedUrlToGetId.length-1];

    this.dataFetchFromApi.getSingleHouse(houseId).subscribe(
      data => {
        console.log(data);
        this.currentHouse=data;

      }
    )
  }

  public goBackToPreviousPage(): any {
    this.Location.back();
  }

}
