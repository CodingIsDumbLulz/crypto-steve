import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify'
})
export class StringifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value[0]) { console.log(value); }
    return value ? value._text.nativeElement.innerText : 'Nothing Selected';
  }
}
