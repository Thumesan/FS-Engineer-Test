import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ChuckService,
  SearchService,
  SwapiService,
} from 'src/app/api/services';

import { ResultsMainComponent } from './results-main.component';

describe('ResultsMainComponent', () => {
  let component: ResultsMainComponent;
  let fixture: ComponentFixture<ResultsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsMainComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [
        { provide: ChuckService, useClass: ChuckService },
        { provide: SwapiService, useClass: SwapiService },
        { provide: SearchService, useClass: SearchService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Chuck Scenario', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: ActivatedRoute, useValue: { type: 'chuck' } }],
    });
    beforeEach(() => {
      component.param = 'chuck';
      spyOn(component, 'doChuck');
      component.doChuck();
      fixture.detectChanges();
    });

    it('It should call doChcuk', () => {
      expect(component.doChuck).toHaveBeenCalled();
    });

  });

  describe('Swapi Scenario', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: ActivatedRoute, useValue: { type: 'swapi' } }],
    });
    beforeEach(() => {
      component.param = 'swapi';
      spyOn(component, 'doSwapi');
      component.doSwapi();
      fixture.detectChanges();
    });

    it('It should call doSwapi', () => {
      expect(component.doSwapi).toHaveBeenCalled();
    });

  });

  describe('Search Scenario', () => {
    const mockSearchValue = 'test';
    TestBed.configureTestingModule({
      providers: [{ provide: ActivatedRoute, useValue: { type: 'search' } }],
    });
    beforeEach(() => {
      component.param = 'search';
      spyOn(component, 'doSearch');
      component.doSearch(mockSearchValue);
      fixture.detectChanges();
    });

    it('It should call doSearch', () => {
      expect(component.doSearch).toHaveBeenCalled();
    });

  });
});
