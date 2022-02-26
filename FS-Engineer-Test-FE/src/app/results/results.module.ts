import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsMainComponent } from './results-main/results-main.component';
import { AccordianComponent } from './accordian/accordian.component';
import { SearchComponent } from './search/search.component';
import { ResultsRoutingModule } from './results.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ResultsMainComponent, AccordianComponent, SearchComponent, LoadingComponent],
  imports: [CommonModule, ResultsRoutingModule, NgbModule],
})
export class ResultsModule {}
