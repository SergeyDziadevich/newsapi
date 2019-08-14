import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from '../../interfaces/article';
import { Source } from "../../interfaces/source";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public sourceEmitter: EventEmitter<any> = new EventEmitter<any>();

  public bs = new BehaviorSubject<Article[]>([]);

  getSources(){
    return this.httpClient.get<any>(`https://newsapi.org/v2/sources?apiKey=eabd967104da4e07a9c41b1342a889b1`)
      .pipe(
        map((response: any) => {
          console.log('sources', response);
          return response.sources;
        })
      );
  }

  getNewsBySource(sourceId){
    console.log(sourceId);
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=eabd967104da4e07a9c41b1342a889b1`)
      .pipe(
        map((response: any) => {
          console.log('articles', response);
          return response.articles;
        })
      );
  }

  setSource(sourceId: string){
    this.sourceEmitter.emit(sourceId);
  }

  getOwnNews(){
    return this.httpClient.get<Article[]>('http://localhost:3000/news');
  }
}
