import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { RegistrationsService } from './registrations.service';
import { RegistrationsComponent } from './registrations.component';

@NgModule({
    declarations: [RegistrationsComponent],
    imports: [ ReactiveFormsModule, CommonModule, RouterModule, FormsModule, HttpClientModule, SharedModule, NgxCurrencyModule],
    providers: [
      RegistrationsService
      ]
})
export class RegistrationsModule{

}
