import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeywordSearchService {

  constructor() { }

  public keywords: any;

  public keyword: EventEmitter<string> = new EventEmitter();

  sendKeyword(value: string){
    this.keywords = value.split('');
    this.keyword.emit(this.keywords);
  }
}
