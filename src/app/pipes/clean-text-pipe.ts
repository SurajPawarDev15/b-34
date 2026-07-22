import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanText',
})
export class CleanTextPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
