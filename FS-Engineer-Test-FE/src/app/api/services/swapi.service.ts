/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SwapiPeople } from '../models/swapi-people';

@Injectable({
  providedIn: 'root',
})
export class SwapiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation swapiPeopleGet
   */
  static readonly SwapiPeopleGetPath = '/Swapi/people';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swapiPeopleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  swapiPeopleGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<SwapiPeople>> {

    const rb = new RequestBuilder(this.rootUrl, SwapiService.SwapiPeopleGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SwapiPeople>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `swapiPeopleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swapiPeopleGet$Plain(params?: {
  }): Observable<SwapiPeople> {

    return this.swapiPeopleGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SwapiPeople>) => r.body as SwapiPeople)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swapiPeopleGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  swapiPeopleGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<SwapiPeople>> {

    const rb = new RequestBuilder(this.rootUrl, SwapiService.SwapiPeopleGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SwapiPeople>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `swapiPeopleGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swapiPeopleGet$Json(params?: {
  }): Observable<SwapiPeople> {

    return this.swapiPeopleGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SwapiPeople>) => r.body as SwapiPeople)
    );
  }

}
