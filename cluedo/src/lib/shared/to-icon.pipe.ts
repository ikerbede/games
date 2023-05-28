import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'toIcon'
})
export class ToIconPipe implements PipeTransform {
  transform(value: string): string {
    switch(value) {
      case 'suspect':
        return 'person_outline';
      case 'weapon':
        return 'build';
      case 'place':
        return 'not_listed_location';
      default:
        return '';
    }
  }
}
