/* tslint:disable */
/* eslint-disable */
import { SwapiPerson } from './swapi-person';
export interface SwapiPeople {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: null | Array<SwapiPerson>;
}
