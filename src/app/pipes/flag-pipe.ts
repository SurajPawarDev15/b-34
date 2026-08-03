import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flag',
})
export class FlagPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
