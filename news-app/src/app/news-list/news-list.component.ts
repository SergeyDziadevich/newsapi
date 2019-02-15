import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteArticle() {
    console.log(`the article has been removed`)
  }
}
