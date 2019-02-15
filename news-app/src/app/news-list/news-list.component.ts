import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../mock-news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  articles = ARTICLES;

  constructor() { }

  ngOnInit() {
  }

  deleteArticle() {
    console.log(`the article has been removed`);
  }

  loadMore(){
    console.log(`load more articles`);
  }
}
