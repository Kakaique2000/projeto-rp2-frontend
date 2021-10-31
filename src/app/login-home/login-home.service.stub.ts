import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { userMock } from "../shared/services/user.mock";
import { HomeLoginService } from "./login-home.service";

export const loginHomeServiceStub: Partial<HomeLoginService> = {
  reloadUser: () => of(userMock).pipe(
    delay(1500)
  )
}
