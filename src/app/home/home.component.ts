import { Component, OnInit } from '@angular/core';
import { DataFetchFromAPIService } from '../data-fetch-from-api.service';
//import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allCharacters;
  public allBooks;
  public allHouses;
  
  

  constructor(public dataFetchFromAPIService: DataFetchFromAPIService) { }

  ngOnInit() {
    //fetch all characters
    this.allCharacters = this.dataFetchFromAPIService.getAllCharacters().subscribe(

      data => {
        console.log("logging Characters data");
        console.log(data);
        this.allCharacters= data;
        console.log("This is allCharacters Data");
        console.log(this.allCharacters);
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    );

      //fetch all houses
    this.allHouses = this.dataFetchFromAPIService.getAllHouses().subscribe(

      data =>  {
        console.log("logging Houses data");
        console.log(data);
        this.allHouses= data;
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    );

      //fetch all books
    this.allBooks = this.dataFetchFromAPIService.getAllBooks().subscribe(

      data => {
        console.log("logging  Books data");
        console.log(data);
        this.allBooks= data;
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    );


    $(document).ready(function(){
      $("#charactersData").click(function(){
        $('#housesDiv').hide();
        $('#booksDiv').hide();
        $('#charactersDiv').show();
      });
      
    });

    $(document).ready(function(){
      $("#allData").click(function(){
        $('#housesDiv').show();
        $('#charactersDiv').show();
        $('##booksDiv').show();
      });
      
    });

    $(document).ready(function(){
      $("#booksData").click(function(){
        $('#charactersDiv').hide();
        $(' #housesDiv').hide();
        $('#booksDiv').show();
      });
      
    });

    $(document).ready(function(){
      $("#housesData").click(function(){
        $('#charactersDiv').hide();
        $(' #booksDiv').hide();
        $('#housesDiv').show();
      });
      
    });



  }



 

  // public displayCharactersOnly(){
  //   console.log("I am in jqurey statement");
  //   $(document).ready(function(){
  //     $("#characterData").click(function(){

  //       $('#housesDiv').hide();
  //     });
      
  //   });
  // }
  }


