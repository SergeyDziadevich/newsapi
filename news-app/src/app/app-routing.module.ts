import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from "./news-list/news-list.component";
import { ArticlePageComponent } from "./article-page/article-page.component";
import { ArticleFormComponent } from "./article-form/article-form.component";

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: 'article-edit/:id', component: ArticleFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
