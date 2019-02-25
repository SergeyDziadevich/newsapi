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
    return this.httpClient.get<any>(`https://newsapi.org/v2/sources?apiKey=eabd967104da4e07a9c41b1342a889b1`)
      .pipe(
        map((response: any) => {
          console.log('sources', response);
          // const data = response.json();
          return response.sources;
        })
      );
  }

  getNews(){
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=eabd967104da4e07a9c41b1342a889b1`)
      .pipe(
        map((response: any) => {
          console.log('articles', response);
          // const data = response.json();
          return response.articles;
        })
      );
  }

  getOwnNews(){
    return this.httpClient.get<any>('http://localhost:3000/news');
  }
}
