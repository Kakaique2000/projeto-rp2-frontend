import { of, Subject } from "rxjs";
import { delay, tap } from "rxjs/operators";
import { userMock } from './../../shared/services/user.mock';
import { JobListService } from "./job-list.service";
import { jobMock } from "./job.mock";

export class jobListStub implements Partial<JobListService> {

  idLoading$ = new Subject<number>();

  apply = (id: number) => {
    this.idLoading$.next(id)
    return of(userMock).pipe(
      delay(1500),
      tap(e => this.idLoading$.next(-1))
    );
  }

  isUserCandidated$(id: number) {
    return of(false)
  }


  getJob = () => of(jobMock).pipe(
    delay(1000)
  )

  getJobs = () => of([
    {
      "id": 1,
      "title": "Desenvolvedor Angular JR",
      "description": "Analista desenvolvedor de React focado em aprender novas experiências e se dedicar à equipe de forma que trabalhar seja a única coisa que deseja em sua vida",
      "salary": 5000,
      "knowledges": [
        {
          "id": 1,
          "name": "Angular",
          "jobs": []
        }
      ],
      "city": "São Paulo",
      "companyLogo": "https://pbs.twimg.com/profile_images/1435308291756802049/5aNaRJtl_400x400.jpg"
    }
  ])
}
