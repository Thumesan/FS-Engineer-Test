import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  data!: CardModel;

  constructor(private router: Router, private route: ActivatedRoute) { }

  navigate(route: string) {
    this.router.navigate(['/results', route]);
  }

}
