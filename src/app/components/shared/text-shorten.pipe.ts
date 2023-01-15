import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'textShorten',
})
export class TextShortenPipe implements PipeTransform {
  transform(text: string, length: number) {
    if (text.length < length) return text;
    return text.slice(0, length) + ' ...';
  }
}
