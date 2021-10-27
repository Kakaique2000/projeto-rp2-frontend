import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from './home/home.module';
import { HomeLoginModule } from './login-home/home-login.module';
import { NewJobModule } from './new-job/new-job.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor';
import { NewCompanyModule } from './new-company/new-company.module';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { RegistrationsModule } from './registrations/registrations.module';
import { MarkdownModule } from 'ngx-markdown';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FormFieldComponent } from './shared/form-field/form-field.component';
import { AvatarModalComponent } from './my-profile/avatar-modal/avatar-modal.component';

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
