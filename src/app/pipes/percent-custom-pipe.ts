import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentCustom',
})
export class PercentCustomPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
