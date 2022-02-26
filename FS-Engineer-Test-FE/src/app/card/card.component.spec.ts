import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SearchService } from '../api/services';
import { CardModel } from '../models/card.model';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const mockRoute: string = 'chuck';
  const mockCardData: CardModel = {
    title: 'Chuck Norris Jokes',
    description: 'Click here to get joke categories',
    iconUrl: '/assets/images/chuck.png',
    class: 'chuck',
    routing: 'chuck',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: of({ type: 'Feature Announcement' }),
            },
          },
        },
        { provide: SearchService, useClass: SearchService },

      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.data = mockCardData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On Go to Button click', () => {
    beforeEach(async () => {
      spyOn(component, 'navigate');
      component.navigate(mockRoute);
    });
    it('should navigate to specified route', () => {
      expect(component.navigate).toHaveBeenCalled();
    });
  });
});
