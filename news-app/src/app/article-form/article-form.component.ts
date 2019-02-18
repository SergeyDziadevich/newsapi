import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {

  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  save(){
    console.log('Saved');
  }

  preventSubmit(e) {
    e.preventDefault();
  }

}
