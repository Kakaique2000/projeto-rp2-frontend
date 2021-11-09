import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewJobComponent } from './new-job.component';
import { NewJobService } from './new-job.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [NewJobComponent],
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule, HttpClientModule, SharedModule, NgxCurrencyModule, MarkdownModule.forRoot()],
  providers: [
    NewJobService
  ]
})
export class NewJobModule {

}
