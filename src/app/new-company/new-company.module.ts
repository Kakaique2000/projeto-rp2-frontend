import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';
import { NewCompanyComponent } from './new-company.component';
import { NewCompanyService } from './new-company.service';


@NgModule({
    declarations: [NewCompanyComponent],
    imports: [ ReactiveFormsModule, CommonModule, RouterModule, FormsModule, HttpClientModule, SharedModule],

    providers: [
      NewCompanyService
      ]
})
export class NewCompanyModule{

}
