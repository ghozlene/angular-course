import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultPipe'
})
export class DefaultPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): String {

    if (!value) {
      return 'cv.jpg';
    }
    return value
  }

}
