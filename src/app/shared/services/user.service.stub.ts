import { of } from "rxjs";
import { delay } from 'rxjs/operators';
import { userMock } from "./user.mock";
import { UserService } from "./user.service";

export const userServiceStub: Partial<UserService> = {
  patchUser: () => of(userMock).pipe(delay(1500))
}
