import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debounce',
})
export class DebouncePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
