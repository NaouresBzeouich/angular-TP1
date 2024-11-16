import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cVNameSelector',
  standalone: true
})
export class CVNameSelectorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
