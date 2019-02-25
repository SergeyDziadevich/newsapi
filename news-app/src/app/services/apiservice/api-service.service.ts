import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  //public sourcesEmitter: EventEmitter<Source[]> = new EventEmitter<Source[]>();

  getSources(){
    return this.httpClient.get<any>('https://someapi.com/')
  }

  getNews(){
    return this.httpClient.get<any>(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-25&sortBy=publishedAt&apiKey=eabd967104da4e07a9c41b1342a889b1`)
      .pipe(
        map((response: any) => {
          console.log('response', response);
          // const data = response.json();
          return response.articles;
        })
      );
  }

  getOwnNews(){

  }
}
