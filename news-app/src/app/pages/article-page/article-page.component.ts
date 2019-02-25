import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ARTICLES } from '../../../mocks/mock-news';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  public aticleNumber: string;
  public articlePage: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.aticleNumber = this.route.snapshot.params['id'];

    this.articlePage = ARTICLES.find((elem) => {
      return elem.url == this.route.snapshot.params['id'];
    });


  }

}
