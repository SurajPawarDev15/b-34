import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomColor',
})
export class RandomColorPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
