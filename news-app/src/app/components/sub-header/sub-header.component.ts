import { Component, OnInit } from '@angular/core';
import { SOURCES } from '../../mock/mock-source-list';
import { TitleService } from "../../services/title/title.service";
import { KeywordSearchService } from '../../services/keyword-search/keyword-search.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  sources = SOURCES;

  constructor(
    private titleService: TitleService,
    private keywordSearchService: KeywordSearchService,
  ) { }

  ngOnInit() {
  }

  filter(keywords: string) {
    keywords = keywords.trim();

    console.log(`News filtered by keywords: ${keywords}`);

    this.keywordSearchService.sendKeyword(keywords);
  }

  addArticel() {
    console.log(`Article added`);
  }

  onChangeOnlyMyNews() {
    console.log(`Displays news created by me`);
  }

  onChangeSource(sourceName: string) {
    console.log(`Select source: ${sourceName}`);
    this.titleService.setTitle(sourceName);

  }
}
