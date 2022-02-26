/* tslint:disable */
/* eslint-disable */
import { ChuckSearchResponse } from './chuck-search-response';
import { SwapiSearchResponse } from './swapi-search-response';
export interface SearchResponse {
  chuckSearchResponse?: ChuckSearchResponse;
  swapiSearchResponse?: SwapiSearchResponse;
}
