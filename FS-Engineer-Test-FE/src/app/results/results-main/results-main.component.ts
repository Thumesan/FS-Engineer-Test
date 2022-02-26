import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChuckCategories, ChuckJokes, SearchResponse, SwapiPeople } from 'src/app/api/models';
import { ChuckService, SearchService, SwapiService } from 'src/app/api/services';

@Component({
  selector: 'app-results-main',
  templateUrl: './results-main.component.html',
  styleUrls: ['./results-main.component.scss'],
})
export class ResultsMainComponent implements OnInit, OnDestroy {
  param!: string;
  subscriptions: Subscription = new Subscription();
  loading: boolean = false;
  context = {};
  chuckCategoriesObject: ChuckCategories = {};
  swapiPeopleObject: SwapiPeople = {};
  chuckJokeResults: ChuckJokes[] = [];
  searchResponse: SearchResponse = {};
  hasError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private chuckService: ChuckService,
    private swapiService: SwapiService,
    private searchService: SearchService
    ) {
    this.subscriptions.add(
      this.activatedRoute.params.subscribe((param) => {
        this.param = param['type'];
      })
    );
  }

  ngOnInit(): void {
    switch (this.param) {
      case 'chuck':
        this.doChuck();
        this.context = this.chuckCategoriesObject;
        break;
      case 'swapi':
        this.doSwapi();
        this.context = this.swapiPeopleObject;
        break;
      default:
        break;
    }
  }

  doChuck(): void {
    this.loading = true;
    this.subscriptions.add(this.chuckService.chuckCategoriesGet$Json().subscribe((categories) => {
      this.chuckCategoriesObject = categories;
      this.loading = false;
    }));
  }

  doSwapi(): void {
    this.loading = true;
    this.subscriptions.add(
      this.swapiService.swapiPeopleGet$Json().subscribe((people) => {
        this.swapiPeopleObject = people;
        this.loading = false;
      }, (err) => {
        this.hasError = true;
      })
    );
  }

  doSearch(event: string): void {
    this.loading = true;
    this.subscriptions.add(
      this.searchService.searchQueryGet$Json({query: event}).subscribe((searchResponse) => {
        this.loading = false;
        this.searchResponse = searchResponse;
      }, (err) => {
        this.hasError = true;
      })
    );
  }

  selectCategory(category:string): void {
    this.loading = true;
    this.subscriptions.add(
      this.chuckService.chuckJokeCategoryGet$Json({category:category}).subscribe((jokes) => {
        this.chuckJokeResults = [];
        this.chuckJokeResults.push(jokes);
        this.loading = false;
      }, (err) => {
        this.hasError = true;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
