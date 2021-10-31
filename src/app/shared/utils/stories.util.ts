import { RouterTestingModule } from "@angular/router/testing";
import { moduleMetadata } from "@storybook/angular";
import { HomeLoginService } from "src/app/login-home/login-home.service";
import { loginHomeServiceStub } from "src/app/login-home/login-home.service.stub";
import { UserService } from "../services/user.service";
import { userServiceStub } from "../services/user.service.stub";
import { TestingSharedModule } from "./testing.shared.module";

export const provideStoriesDecorator = () => [
  moduleMetadata({
    imports: [TestingSharedModule, RouterTestingModule],
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
