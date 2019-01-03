import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { DataFetchFromAPIService } from './data-fetch-from-api.service';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HouseViewComponent,
    BookViewComponent,
    CharacterViewComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: '' ,redirectTo:'home', pathMatch: 'full'},
      {path:'house-view/:houseId',component:HouseViewComponent},
      {path:'book-view/:bookId',component:BookViewComponent},
      {path:'character-view/:characterId',component:CharacterViewComponent},
      {path: 'about', component:AboutComponent},
      {path: '**',component:NotFoundComponent}
    ])
  ],
  providers: [DataFetchFromAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
