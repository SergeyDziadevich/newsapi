import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {TitleService} from "../title.service";

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  constructor(
    private location: Location,
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Edit');
  }

  cancel() {
    this.location.back();
  }

  save(){
    console.log('Saved');
  }

  preventSubmit(e) {
    e.preventDefault();
  }

}
