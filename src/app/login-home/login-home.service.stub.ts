import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { HomeLoginService } from "./login-home.service";

export const loginHomeServiceStub: Partial<HomeLoginService> = {
  reloadUser: () => of(true).pipe(
    delay(1500)
  )
}
