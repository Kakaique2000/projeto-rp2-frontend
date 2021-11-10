import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from 'src/app/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from './home/home.module';
import { KnowledgePageComponent } from './knowledge-page/knowledge-page.component';
import { HomeLoginModule } from './login-home/home-login.module';
import { AvatarModalComponent } from './my-profile/avatar-modal/avatar-modal.component';
import { CertifiedModalComponent } from './my-profile/certified-modal/certified-modal.component';
import { ExperienceModalComponent } from './my-profile/experience-modal/experience-modal.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NewCompanyModule } from './new-company/new-company.module';
import { NewJobModule } from './new-job/new-job.module';
import { JobRecruiterDetailsComponent } from './recruiter/my-created-jobs/job-recruiter-details/job-recruiter-details.component';
import { MyCreatedJobsComponent } from './recruiter/my-created-jobs/my-created-jobs.component';
import { RegistrationsModule } from './registrations/registrations.module';
import { TokenInterceptor } from './token-interceptor';


export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  allowZero: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    MyProfileComponent,
    AvatarModalComponent,
    ExperienceModalComponent,
    CertifiedModalComponent,
    MyCreatedJobsComponent,
    JobRecruiterDetailsComponent,
    KnowledgePageComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    HomeModule,
    HomeLoginModule,
    BrowserAnimationsModule,
    NewJobModule,
    NewCompanyModule,
    RegistrationsModule,
    MarkdownModule.forRoot(),
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
