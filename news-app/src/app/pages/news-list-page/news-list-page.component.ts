import { Component, OnInit, Output} from '@angular/core';

import { Article } from "../../interfaces/article";
import { ARTICLES } from '../../../mocks/mock-news';

import { ApiService } from "../../services/apiservice/api-service.service";
import { TitleService } from "../../services/title/title.service";
import { KeywordSearchService } from '../../services/keyword-search/keyword-search.service';
import {Source} from "../../interfaces/source";

@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {

 // articles: Article[] = ARTICLES;
  public articles: Article[] = [];
  public keywords: string;
  public sourceId: 'abc-news';

  constructor(
    private titleService: TitleService,
    private keywordSearchService: KeywordSearchService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    const title: string = 'News App';
    this.sourceId = 'abc-news';

    this.apiService.bs.asObservable().subscribe(
      (data: Article[]) => {
        this.articles = data;
      }
    );
    this.titleService.setTitle(title);

    this.keywordSearchService.keyword.subscribe((keywords) => {
      this.keywords = keywords;
    });

    this.apiService.sourceEmitter.subscribe((sourceId) => {
      this.sourceId = sourceId;

      console.log('now current source = ', this.sourceId );

      this.apiService.bs.next([]);

      this.apiService.getNewsBySource(this.sourceId).subscribe(
        (data: Article[]) => {
          this.articles = data;
        },
        (error) => console.log(error)
      );
    });


    this.apiService.getNewsBySource(this.sourceId).subscribe(
      (data: Article[]) => {
        this.articles = data;
      },
      (error) => console.log(error)
    );

    // this.apiService.getOwnNews().subscribe(
    //   (data: Article[]) => {
    //     this.articles = this.articles.concat(data);
    //   }
    // );
  }

  loadMore(){
    console.log(`load more articles:`);
  }

}
