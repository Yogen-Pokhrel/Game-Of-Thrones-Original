import { Component, OnInit } from '@angular/core';
import {Route , ActivatedRoute, Router} from '@angular/router' 
import { DataFetchFromAPIService } from '../data-fetch-from-api.service';
import { Location} from '@angular/common';


@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  public currentCharacter;

  constructor(private activatedRoute: ActivatedRoute, public dataFetchFromApi: DataFetchFromAPIService, private _router: Router, private Location : Location) { }

  ngOnInit() {
    let currentId= this.activatedRoute.snapshot.paramMap.get('characterId');
    console.log(currentId);
    let parsedUrlToGetId = currentId.split('/');
    console.log(parsedUrlToGetId);
    console.log("Check the last element");
    let characterId= parsedUrlToGetId[parsedUrlToGetId.length-1];

    this.dataFetchFromApi.getSingleCharacter(characterId).subscribe(
      data => {
        console.log(data);
        this.currentCharacter=data;

      }
    )
  }
  public goBackToPreviousPage(): any {
    this.Location.back();
  }

}
