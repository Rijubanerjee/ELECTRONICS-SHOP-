import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pf'
})
export class PfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
