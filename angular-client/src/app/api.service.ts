import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
providedIn:  'root'
})

export  class  APIService {

    API_URL  =  'http://localhost:3000';

    constructor(private  httpClient:  HttpClient) {}

    getTvShows() {
      return  this.httpClient.get(`${this.API_URL}/api/tvshows`);
    }
}