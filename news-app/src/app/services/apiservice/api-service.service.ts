import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Article } from "../../interfaces/article";
import { Source } from "../../interfaces/source";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public source;

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
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=${this.source.id}&apiKey=eabd967104da4e07a9c41b1342a889b1`)
      .pipe(
        map((response: any) => {
          console.log('articles', response);
          // const data = response.json();
          return response.articles;
        })
      );
  }

  setSource(sourceId: string, sourceName: string){
    this.source = {id: sourceId, name: sourceName};

    console.log(this.source);

  }

  getOwnNews(){
    return this.httpClient.get<Article[]>('http://localhost:3000/news');
  }
}
