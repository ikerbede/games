import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'floor'
})
export class FloorPipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value);
  }
}
