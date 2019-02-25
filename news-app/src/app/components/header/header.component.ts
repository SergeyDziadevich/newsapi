import {Component, OnDestroy, OnInit} from '@angular/core';
import { TitleService } from "../../services/title/title.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public title: string;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.pageTitle.subscribe((newTitle: string)=>{
      this.title = newTitle;
    })
  }

  ngOnDestroy(){
    this.titleService.pageTitle.unsubscribe();
  }

}
