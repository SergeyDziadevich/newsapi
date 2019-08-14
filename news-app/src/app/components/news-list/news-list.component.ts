import { Component, Input } from '@angular/core';
import { Article } from "../../interfaces/article";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {

  @Input() articles: Article[] = [];

  constructor() { }

}
