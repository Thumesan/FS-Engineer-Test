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

import { SearchResponse } from '../models/search-response';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchQueryGet
   */
  static readonly SearchQueryGetPath = '/Search/{query}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchQueryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchQueryGet$Plain$Response(params: {
    query: string;
  }): Observable<StrictHttpResponse<SearchResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SearchService.SearchQueryGetPath, 'get');
    if (params) {
      rb.path('query', params.query, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SearchResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchQueryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchQueryGet$Plain(params: {
    query: string;
  }): Observable<SearchResponse> {

    return this.searchQueryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SearchResponse>) => r.body as SearchResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchQueryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchQueryGet$Json$Response(params: {
    query: string;
  }): Observable<StrictHttpResponse<SearchResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SearchService.SearchQueryGetPath, 'get');
    if (params) {
      rb.path('query', params.query, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SearchResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchQueryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchQueryGet$Json(params: {
    query: string;
  }): Observable<SearchResponse> {

    return this.searchQueryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SearchResponse>) => r.body as SearchResponse)
    );
  }

}
