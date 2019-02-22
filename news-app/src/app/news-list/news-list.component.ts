import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ARTICLES } from '../mock-news';
import { TitleService } from "../title.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnChanges, OnDestroy {

  articles = ARTICLES;

  limit: number = 5;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle('News App');
    console.log("ngOnInit");
  }

  loadMore(){
    this.limit+=5;
    console.log(`load more articles:`, this.limit);
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
}
