import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../../mock/mock-news';
import { TitleService } from "../../services/title/title.service";

@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {

  articles = ARTICLES;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    const title: string = 'News App';
    this.titleService.setTitle(title);
  }

  loadMore(){
    console.log(`load more articles:`);
  }

}
