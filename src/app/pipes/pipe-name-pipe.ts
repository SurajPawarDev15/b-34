import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeName',
})
export class PipeNamePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
