import { Component, OnInit, Output} from '@angular/core';
import { ARTICLES } from '../../mock/mock-news';
import { TitleService } from "../../services/title/title.service";
import { KeywordSearchService } from '../../services/keyword-search/keyword-search.service';

@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {

  articles = ARTICLES;
  public keywords: string;

  constructor(
    private titleService: TitleService,
    private keywordSearchService: KeywordSearchService,
  ) { }

  ngOnInit() {
    const title: string = 'News App';

    this.titleService.setTitle(title);

    this.keywordSearchService.keyword.subscribe((keywords) => {
      this.keywords = keywords;
    })
  }

  loadMore(){
    console.log(`load more articles:`);
  }

}
