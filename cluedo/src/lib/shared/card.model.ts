export interface Card {
  id: number;
  type: 'suspect' | 'weapon' | 'place';
  name: string;
}
