import { Pipe, PipeTransform } from '@angular/core';
import { Model } from '../Dto/Model';

@Pipe({
  name: 'getNames'
})
export class GetNamesPipe implements PipeTransform {

  transform(values: any[] | undefined, ...args: unknown[]): unknown {
    if (!values) return values;
    return values.map(value=> value.name);
  }

}
