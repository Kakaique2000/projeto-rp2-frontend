import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared.module';
import { SearchCardComponent } from './search-card/search-card.component';
import { SearchInputComponent } from './search-card/search-input/search-input.component';
import { SearchParamsComponent } from './search-card/search-params/search-params.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchParamsService } from './search-card/search-params/search-params.service';
import { JobListComponent } from './job-list/job-list.component';
import { FilterByJob } from './filter-by-job.pipe';
import { FilterByDescription } from './job-list/filter-by-description.pipe';
import { JobCardComponent } from './job-list/job-card/job-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchCardComponent,
    SearchInputComponent,
    SearchParamsComponent,
    JobListComponent,
    FilterByJob,
    FilterByDescription,
    JobCardComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    SharedModule,
    CommonModule,
  ],
  providers: [
    SearchParamsService
  ]
})
export class HomeModule { }
