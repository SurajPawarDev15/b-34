import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideEmail',
})
export class HideEmailPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
