import { Card } from './card.model';
import { Crime } from './crime.model';
import { Deck } from './deck.model';

export class Round {
  private deck = new Deck();
  private crime!: Crime;
  private hands: {cards: Card[]}[] = [];

  constructor(
    public nbPlayers: number,
    public nbCards: number
  ) {
    this.pickUpCrime();
    this.pickUpHands();
  }

  private pickUpCrime(): void {
    const suspect = this.deck.suspects[Math.floor(Math.random() * this.deck.suspects.length)];
    const weapon = this.deck.weapons[Math.floor(Math.random() * this.deck.weapons.length)];
    const place = this.deck.places[Math.floor(Math.random() * this.deck.places.length)];
    this.crime = {
      suspect: suspect,
      weapon: weapon,
      place: place
    };
    this.deck.suspects.splice(this.deck.suspects.indexOf(suspect), 1);
    this.deck.weapons.splice(this.deck.weapons.indexOf(weapon), 1);
    this.deck.places.splice(this.deck.places.indexOf(place), 1);
  }

  private pickUpHands(): void {
    for (let i = 0; i < this.nbPlayers; i++) {
      const cards: Card[] = [];
      for (let j = 0; j < this.nbCards; j++) {
        const typeInt = Math.floor(Math.random() * 3);
        let card: Card;
        switch (typeInt) {
          case 0:
            const suspect = this.deck.suspects[Math.floor(Math.random() * this.deck.suspects.length)];
            card = {type: 'suspect', id: suspect.id, name: suspect.name};
            this.deck.suspects.splice(this.deck.suspects.indexOf(suspect), 1);
            break;
          case 1:
            const weapon = this.deck.weapons[Math.floor(Math.random() * this.deck.weapons.length)];
            card = {type: 'weapon', id: weapon.id, name: weapon.name};
            this.deck.weapons.splice(this.deck.weapons.indexOf(weapon), 1);
            break;
          case 2:
            const place = this.deck.places[Math.floor(Math.random() * this.deck.places.length)];
            card = {type: 'place', id: place.id, name: place.name};
            this.deck.places.splice(this.deck.places.indexOf(place), 1);
            break;
          default:
            console.error('The card picking up failed!');
            return;
        }
        cards.push(card);
      }
      this.hands.push({cards: cards});
    }
  }

  getHands(): {cards: Card[]}[] {
    return this.hands;
  }

  getCrime(): Crime {
    return this.crime;
  }
}
