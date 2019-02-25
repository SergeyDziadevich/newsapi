import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor() { }

  public pageTitle: EventEmitter<string> = new EventEmitter();

  setTitle(newTitle: string){
    this.pageTitle.emit(newTitle);
  }
}
