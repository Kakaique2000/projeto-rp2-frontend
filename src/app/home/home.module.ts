import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './job-list/job-list.component';
import { FilterByJob } from './filter-by-job.pipe';
import { FilterByDescription } from './job-list/filter-by-description.pipe';
import { JobCardComponent } from './job-list/job-card/job-card.component';
import { JobDescriptorComponent } from './job-descriptor/job-descriptor.component';
import { MarkdownModule } from 'ngx-markdown';
import { JobSearchComponent } from './job-search/job-search.component';

@NgModule({
  declarations: [
    HomeComponent,
    JobListComponent,
    FilterByJob,
    FilterByDescription,
    JobCardComponent,
    JobDescriptorComponent,
    JobSearchComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    SharedModule,
    CommonModule,
    MarkdownModule.forChild(),
  ],
})
export class HomeModule { }
