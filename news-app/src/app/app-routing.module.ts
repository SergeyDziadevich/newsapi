import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListPageComponent } from './pages/news-list-page/news-list-page.component';
import { ArticlePageComponent } from "./pages/article-page/article-page.component";
import { ArticleFormComponent } from "./pages/article-form/article-form.component";

const routes: Routes = [
  {path: '', component: NewsListPageComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: 'article-edit/:id', component: ArticleFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
