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

import { ChuckCategories } from '../models/chuck-categories';
import { ChuckJokes } from '../models/chuck-jokes';

@Injectable({
  providedIn: 'root',
})
export class ChuckService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation chuckCategoriesGet
   */
  static readonly ChuckCategoriesGetPath = '/Chuck/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `chuckCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  chuckCategoriesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<ChuckCategories>> {

    const rb = new RequestBuilder(this.rootUrl, ChuckService.ChuckCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChuckCategories>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `chuckCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  chuckCategoriesGet$Plain(params?: {
  }): Observable<ChuckCategories> {

    return this.chuckCategoriesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ChuckCategories>) => r.body as ChuckCategories)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `chuckCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  chuckCategoriesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<ChuckCategories>> {

    const rb = new RequestBuilder(this.rootUrl, ChuckService.ChuckCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChuckCategories>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `chuckCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  chuckCategoriesGet$Json(params?: {
  }): Observable<ChuckCategories> {

    return this.chuckCategoriesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ChuckCategories>) => r.body as ChuckCategories)
    );
  }

  /**
   * Path part for operation chuckJokeCategoryGet
   */
  static readonly ChuckJokeCategoryGetPath = '/Chuck/joke/{category}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `chuckJokeCategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  chuckJokeCategoryGet$Plain$Response(params: {
    category: string;
  }): Observable<StrictHttpResponse<ChuckJokes>> {

    const rb = new RequestBuilder(this.rootUrl, ChuckService.ChuckJokeCategoryGetPath, 'get');
    if (params) {
      rb.path('category', params.category, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChuckJokes>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `chuckJokeCategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  chuckJokeCategoryGet$Plain(params: {
    category: string;
  }): Observable<ChuckJokes> {

    return this.chuckJokeCategoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ChuckJokes>) => r.body as ChuckJokes)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `chuckJokeCategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  chuckJokeCategoryGet$Json$Response(params: {
    category: string;
  }): Observable<StrictHttpResponse<ChuckJokes>> {

    const rb = new RequestBuilder(this.rootUrl, ChuckService.ChuckJokeCategoryGetPath, 'get');
    if (params) {
      rb.path('category', params.category, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChuckJokes>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `chuckJokeCategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  chuckJokeCategoryGet$Json(params: {
    category: string;
  }): Observable<ChuckJokes> {

    return this.chuckJokeCategoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ChuckJokes>) => r.body as ChuckJokes)
    );
  }

}
