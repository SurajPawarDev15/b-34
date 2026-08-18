import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heena',
})
export class HeenaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
