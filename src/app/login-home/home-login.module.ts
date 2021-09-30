import { NgModule } from '@angular/core';
import { LoginComponent } from './signin/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';
import { ResetPasswordComponent } from './reset-password/reset-password';
import { NewPasswordComponent } from './new-senha/new-password';


@NgModule({
    declarations: [LoginComponent, SignupComponent, ResetPasswordComponent, NewPasswordComponent],
    imports: [HttpClientModule, ReactiveFormsModule, SharedModule, CommonModule, RouterModule, FormsModule,
        ]
})
export class HomeLoginModule {

}
