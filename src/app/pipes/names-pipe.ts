import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'names',
})
export class NamesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
