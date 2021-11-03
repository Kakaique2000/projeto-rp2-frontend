import { RouterTestingModule } from "@angular/router/testing";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { JobRecruiterMock } from "src/app/home/job-list/job.mock";
import { HomeLoginService } from "src/app/login-home/login-home.service";
import { loginHomeServiceStub } from "src/app/login-home/login-home.service.stub";
import { SharedModule } from "src/app/shared.module";
import { UserService } from "src/app/shared/services/user.service";
import { userServiceStub } from "src/app/shared/services/user.service.stub";
import { JobRecruiterDetailsComponent } from "./job-recruiter-details.component";

export default {
  title: 'Components/Job/Job Recruiter Details',
  component: JobRecruiterDetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule, RouterTestingModule],
      providers: [
        {
          provide: HomeLoginService,
          useValue: loginHomeServiceStub
        },
        {
          provide: UserService,
          useValue: userServiceStub,
        },
      ]
    }),
  ]
} as Meta;

const Template: Story<JobRecruiterDetailsComponent> = (args: JobRecruiterDetailsComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  job: JobRecruiterMock
}

export const WithMoreUsers = Template.bind({});
WithMoreUsers.args = {
  job: {
    ...JobRecruiterMock,
    jobApplications: [JobRecruiterMock.jobApplications[0], JobRecruiterMock.jobApplications[0], JobRecruiterMock.jobApplications[0],]
  }
}
