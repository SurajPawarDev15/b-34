import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternateCase',
})
export class AlternateCasePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
