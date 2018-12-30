import {Component, OnInit} from '@angular/core';
import { APIService } from  './api.service';
import {TvShow } from './TvShows';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  private tvShows: Array<TvShow> = [];

  constructor(private  apiService:  APIService) { }

  ngOnInit() {
      this.getContacts();
  }
  
  public getContacts(){
      this.apiService.getTvShows().subscribe((data:  Array<TvShow>) => {
          this.tvShows = data;
          console.log(data);
      });
  }
}
