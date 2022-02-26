import { CardModel } from '../models/card.model';

export const DisplayCards: CardModel[] = [
  {
    title: 'Chuck Norris Jokes',
    description: 'Click here to get joke categories',
    iconUrl: '/assets/images/chuck.png',
    class: 'chuck',
    routing: 'chuck',
  },
  {
    title: 'Star Wars Characters',
    description: 'Click here to get a list of Star Wars Characters',
    iconUrl: '/assets/images/swapi.png',
    class: 'swapi',
    routing: 'swapi',
  },
  {
    title: 'Search your endpoints Anakin',
    description: 'Click here to search both endpoints',
    iconUrl: '/assets/images/search.gif',
    class: 'search',
    routing: 'search',
  },
];
