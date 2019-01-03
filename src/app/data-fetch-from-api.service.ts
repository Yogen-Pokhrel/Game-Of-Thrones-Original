import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataFetchFromAPIService {

  public baseUrl = "https://www.anapioficeandfire.com/api";
  constructor(public _http : HttpClient) { }
  // private handleError(err : HttpErrorResponse){
  //   console.log ("Handle error Http Calls");
  //   console.log(err.message);
  //   return Observable.throw(err.message);
  //   }

    public getAllCharacters() : any {
      console.log("I am executed in characters Module");
      let myResponse = this._http.get(this.baseUrl+'/characters');
      return myResponse;

    }

    public getAllHouses() :any{
      let myResponse = this._http.get(this.baseUrl+'/houses');
      return myResponse;

    }

    public getAllBooks() : any{
      let myResponse = this._http.get(this.baseUrl+'/books');
      return myResponse;


    }

    public getSingleCharacter(characterId): any {
      
      let myResponse = this._http.get(this.baseUrl+"/characters/"+characterId);
      return myResponse;
  
     
    }
    public getSingleHouse(HouseId): any {
      
      let myResponse = this._http.get(this.baseUrl+"/houses/"+HouseId);
      return myResponse;
  
     
    }
    public getSingleBook(BookId): any {
      
      let myResponse = this._http.get(this.baseUrl+"/books/"+BookId);
      return myResponse;
  
     
    }
}
