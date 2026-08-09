import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keywordHighlight',
})
export class KeywordHighlightPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
