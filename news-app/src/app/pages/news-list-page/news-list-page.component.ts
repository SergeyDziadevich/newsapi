import { Component, OnInit, Output} from '@angular/core';

import { Article } from "../../interfaces/article";
import { ARTICLES } from '../../../mocks/mock-news';

import { ApiService } from "../../services/apiservice/api-service.service";
import { TitleService } from "../../services/title/title.service";
import { KeywordSearchService } from '../../services/keyword-search/keyword-search.service';

@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {

 // articles: Article[] = ARTICLES;
  public articles: Article[];
  public keywords: string;

  constructor(
    private titleService: TitleService,
    private keywordSearchService: KeywordSearchService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    const title: string = 'News App';

    this.titleService.setTitle(title);

    this.keywordSearchService.keyword.subscribe((keywords) => {
      this.keywords = keywords;
    });

    this.apiService.getNews().subscribe(
      (data: Article[]) => {
        this.articles = data;
      },
      (error) => console.log(error)
    );
  }

  loadMore(){
    console.log(`load more articles:`);
  }

}
