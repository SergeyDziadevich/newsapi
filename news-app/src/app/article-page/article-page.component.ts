import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  public aticleNumber: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.aticleNumber = this.route.snapshot.params['id'];
  }

}
