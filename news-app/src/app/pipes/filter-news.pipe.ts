import { Pipe, PipeTransform } from '@angular/core';
import { Article } from "../interfaces/article";

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {

  transform(value: any, args?: string[]): any {
    if (!args || args.length === 0) {
      return value;
    }

    return value.filter((article: Article) =>
      args.every((arg: string) => article.description.includes(arg))
    );
  }
}
