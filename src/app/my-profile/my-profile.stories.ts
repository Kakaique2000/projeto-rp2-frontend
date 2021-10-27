import { moduleMetadata, componentWrapperDecorator, Story, Meta } from "@storybook/angular";
import { JobListComponent } from "../home/job-list/job-list.component";
import { RouterTestingModule } from "@angular/router/testing"
import { HomeLoginService } from "../login-home/login-home.service";
import { loginHomeServiceStub } from "../login-home/login-home.service.stub";
import { SharedModule } from "../shared.module";
import { MyProfileComponent } from "./my-profile.component";

export default {
  title: 'Pages/My Profile',
  component: MyProfileComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule, RouterTestingModule],
      providers: [
        {
          provide: HomeLoginService,
          useValue: loginHomeServiceStub
        }
      ]
    }),
  ]
} as Meta;

const Template: Story<MyProfileComponent> = (args: MyProfileComponent) => ({
  props: args
});

export const Default = Template.bind({})

Default.args = {
  user: {
    cpf: '45529955886',
    email: 'admin@admin.com',
    id: 1,
    name: 'Ademir Ademilson',
    phone: '11974104310',
    profilePic: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png',
    emailVerified: true,
    role: [
      {
        name: 'ROLE_ADMIN',
        id: 412,
        authority: 'ADMIN'
      }
    ]
  }
}


export const NotValidEmail = Template.bind({})
NotValidEmail.args = {
  user: {
    cpf: '45529955886',
    email: 'admin@admin.com',
    id: 1,
    name: 'Ademir Ademilson',
    phone: '11974104310',
    profilePic: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png',
    emailVerified: false,
    role: [
      {
        name: 'ROLE_ADMIN',
        id: 412,
        authority: 'ADMIN'
      }
    ]
  }
}

