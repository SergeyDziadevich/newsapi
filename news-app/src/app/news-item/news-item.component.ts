import { Component, Input, OnInit } from '@angular/core';
import { Article } from "../article";


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() data: Article;

  public isOwnNews: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
