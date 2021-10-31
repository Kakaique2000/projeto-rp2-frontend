import { RouterTestingModule } from "@angular/router/testing";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { HomeLoginService } from "../login-home/login-home.service";
import { loginHomeServiceStub } from "../login-home/login-home.service.stub";
import { SharedModule } from "../shared.module";
import { userMock } from '../shared/services/user.mock';
import { userServiceStub } from "../shared/services/user.service.stub";
import { UserService } from './../shared/services/user.service';
import { AvatarModalComponent } from "./avatar-modal/avatar-modal.component";
import { MyProfileComponent } from "./my-profile.component";

export default {
  title: 'Pages/My Profile',
  component: MyProfileComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule, RouterTestingModule],
      declarations: [AvatarModalComponent],
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

const Template: Story<MyProfileComponent> = (args: MyProfileComponent) => ({
  props: args
});

export const Default = Template.bind({})

Default.args = {
  user: userMock
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
    roles: [
      {
        name: 'ROLE_ADMIN',
        id: 412,
        authority: 'ADMIN'
      }
    ]
  }
}

