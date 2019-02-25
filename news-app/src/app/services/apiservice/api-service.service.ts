import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  apiKey = 'eabd967104da4e07a9c41b1342a889b1';
  host = 'https://newsapi.org/v2';

  //public sourcesEmitter: EventEmitter<Source[]> = new EventEmitter<Source[]>();

  getSources(){
    return this.httpClient.get<any>('https://someapi.com/')
  }

  getNews(){
    return this.httpClient.get<any>(`${this.host}/articles?source=bbc-news&apiKey=${this.apiKey}`)
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
