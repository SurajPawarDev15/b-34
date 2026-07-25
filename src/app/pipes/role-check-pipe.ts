import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleCheck',
})
export class RoleCheckPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
