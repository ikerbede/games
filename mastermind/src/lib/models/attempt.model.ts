import { Color } from './color.enum';

export class Attempt {
  constructor(
    public colors: Color[] = [],
    public reds = 0,
    public whites = 0
  ) {}

  setRedsAndWhites(secretColors: readonly Color[]): void {
    const reducedSecret: Color[] = [];
    const reducedAttempt: Color[] = [];
    this.colors.forEach((color, index) => {
      if (secretColors[index] === color) {
        this.whites++;
      } else {
        reducedSecret.push(secretColors[index]);
        reducedAttempt.push(color);
      }
    });
    reducedAttempt.forEach((color) => {
      const index = reducedSecret.findIndex(sColor => sColor === color);
      if (index >= 0) {
        reducedSecret.splice(index, 1);
        this.reds++;
      }
    });
  }
}
