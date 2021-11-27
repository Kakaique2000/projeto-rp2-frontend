import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
//Angular Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NgxMaskModule } from 'ngx-mask';
import { EllipsisPipe } from 'src/app/shared/pipes/ellipsis.pipe';
import { KnowledgeContentListComponent } from './shared/components/knowledge-content-list/knowledge-content-list.component';
import { KnowledgeContentComponent } from './shared/components/knowledge-content-list/knowledge-content/knowledge-content.component';
import { MarkdownViewerComponent } from './shared/components/markdown-viewer/markdown-viewer.component';
import { UserProfileCardComponent } from './shared/components/user-profile-card/user-profile-card.component';
import { FormFieldComponent } from './shared/form-field/form-field.component';
import { AsyncLoading } from './shared/pipes/async-loading.pipe';
import { AddKnowledgeComponent } from './shared/components/add-knowledge/add-knowledge.component';
import { KnowledgeMultipleSelectComponent } from './shared/components/knowledge-multiple-select/knowledge-multiple-select.component';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';

const matModules = [
  MatCheckboxModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
]

const projectComponents = [
  KnowledgeContentComponent,
  FormFieldComponent,
  UserProfileCardComponent,
  KnowledgeContentListComponent,
  MarkdownViewerComponent
]

@NgModule({
  declarations: [
    AsyncLoading,
    EllipsisPipe,
    ...projectComponents,
    AddKnowledgeComponent,
    KnowledgeMultipleSelectComponent,
    UserDetailsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ...matModules,
    MarkdownModule.forChild(),
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AsyncLoading,
    RouterModule,
    ReactiveFormsModule,
    EllipsisPipe,
    NgxMaskModule,
    ...projectComponents,
    ...matModules,
    KnowledgeMultipleSelectComponent,
  ],
  providers: [],
})
export class SharedModule {}
