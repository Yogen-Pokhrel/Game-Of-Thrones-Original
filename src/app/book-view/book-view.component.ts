import { Component, OnInit } from '@angular/core';
import {Route , ActivatedRoute, Router} from '@angular/router' 
import { DataFetchFromAPIService } from '../data-fetch-from-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  public currentBook;

  constructor(private activatedRoute: ActivatedRoute, public dataFetchFromApi: DataFetchFromAPIService, private _router: Router, private Location : Location) { }

  ngOnInit() {
    let currentId= this.activatedRoute.snapshot.paramMap.get('bookId');
    console.log(currentId);
    let parsedUrlToGetId = currentId.split('/');
    console.log(parsedUrlToGetId);
    console.log("Check the last element");
    let bookId= parsedUrlToGetId[parsedUrlToGetId.length-1];

    this.dataFetchFromApi.getSingleBook(bookId).subscribe(
      data => {
        console.log(data);
        this.currentBook=data;
        console.log(this.currentBook);

      }
    )
  }

  public goBackToPreviousPage(): any {
    this.Location.back();
  }

}
