import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueId',
})
export class UniqueIdPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const [prefix] = args;
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }
}
