import { Color } from "./models/color.enum";

export class ColorUtils {
  static getPalette(): readonly Color[] {
    return Object.keys(Color).map(color => Color[color as keyof typeof Color]);
  }

  static getRandomColor(): Color {
    const palette: readonly Color[] = ColorUtils.getPalette();
    const randomIndex: number = Math.floor(Math.random() * palette.length);
    return palette[randomIndex];
  }

  static getRandomColors(nbColors: number): readonly Color[] {
    return [...Array(nbColors).keys()].map(() => ColorUtils.getRandomColor());
  }
}
