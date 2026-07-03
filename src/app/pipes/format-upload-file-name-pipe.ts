import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUploadFileName',
})
export class FormatUploadFileNamePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
