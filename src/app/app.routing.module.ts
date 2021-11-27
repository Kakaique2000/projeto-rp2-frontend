import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { KnowledgePageComponent } from './knowledge-page/knowledge-page.component';
import { KnowledgePageResolver } from './knowledge-page/knowledge-page.resolver';
import { LoggedGuard } from './login-home/logged.guard';
import { NewPasswordComponent } from './login-home/new-senha/new-password';
import { ResetPasswordComponent } from './login-home/reset-password/reset-password';
import { LoginComponent } from './login-home/signin/login.component';
import { SignupComponent } from './login-home/signup/signup.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileResolver } from './my-profile/my-profile.resolver';
import { NewCompanyComponent } from './new-company/new-company.component';
import { NewJobKnowledgesResolver } from './new-job/new-job-knowledges.resolver';
import { NewJobComponent } from './new-job/new-job.component';
import { MyCreatedJobsResolver } from './recruiter/my-created-jobs.resolver';
import { MyCreatedJobsComponent } from './recruiter/my-created-jobs/my-created-jobs.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { UserDetailsResolver } from './shared/components/user-details/user-details.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { showSideMenu: true },
    canActivate: [LoggedGuard],
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    data: { showSideMenu: true },
    canActivate: [LoggedGuard],
    resolve: {user: UserDetailsResolver}
  },
  {
    path: 'knowledges/:id',
    component: KnowledgePageComponent,
    data: { showSideMenu: true },
    resolve: {knowledge: KnowledgePageResolver},
    canActivate: [LoggedGuard],
  },
  {
    path: 'register',
    component: SignupComponent,
    data: { showSideMenu: false },
  },
  {
    path: 'profile',
    component: MyProfileComponent,
    data: { showSideMenu: true },
    resolve: { user: MyProfileResolver }
  },
  {
    path: 'newjob',
    component: NewJobComponent,
    data: { showSideMenu: true },
    resolve: { knowledges: NewJobKnowledgesResolver },
    canActivate: [LoggedGuard],
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
    data: { showSideMenu: false }
  },
  {
    path: '',
    component: LoginComponent,
    data: { showSideMenu: false }
  },
  {
    path: 'reset-password',
    component: NewPasswordComponent,
    data: { showSideMenu: false }
  },
  {
    path: 'newcompany',
    component: NewCompanyComponent,
    data: { showSideMenu: true },
    canActivate: [LoggedGuard],
  },
  {
    path: 'myregister',
    component: RegistrationsComponent,
    data: { showSideMenu: true },
    canActivate: [LoggedGuard],
  },
  {
    path: 'recruiter/jobs',
    component: MyCreatedJobsComponent,
    data: { showSideMenu: true },
    canActivate: [LoggedGuard],
    resolve: {jobs: MyCreatedJobsResolver}
  },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
