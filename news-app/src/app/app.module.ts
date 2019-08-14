import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { NewsListPageComponent } from './pages/news-list-page/news-list-page.component';
import { NewsItemComponent } from './components/news-list/news-item/news-item.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { FilterNewsPipe } from './pipes/filter-news.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    NewsListComponent,
    ArticlePageComponent,
    ArticleFormComponent,
    NewsItemComponent,
    FilterNewsPipe,
    NewsListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
