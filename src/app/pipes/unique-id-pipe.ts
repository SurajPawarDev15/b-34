import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueId',
})
export class UniqueIdPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
