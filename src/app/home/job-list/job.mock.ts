import { userMock } from 'src/app/shared/services/user.mock';
import { userMock2 } from './../../shared/services/user.mock';
import { JobDetailsModel, JobRecruiterDetailsModel } from './job-list.models';
export const jobMock: JobDetailsModel = {
  "createdAt": "2021-10-31T15:20:33.73134",
  "id": 1,
  "title": "Desenvolvedor Angular JR",
  "description": "Analista desenvolvedor de React focado em aprender novas experiências e se dedicar à equipe de forma que trabalhar seja a única coisa que deseja em sua vida",
  "fullDescription": `    # Somos movidos por histórias ❤

  ## A bank, an universe

  Nubank was born from a simple idea: everyone should have control over their own money.
  We enable millions of Latin Americans to live better by freeing our customers from a
  bureaucratic, slow, and inefficient traditional banking system. With operations in Brazil,
  [Mexico](https://www.visitmexico.com/), Colombia, and offices in Argentina, Germany, and the United States, Nubank is the
  world's largest independent digital bank, reinventing over 40 million customers' financial
  lives.

  ## Engineering at Nubank

  We strive for state-of-the-art software development practices,
  that currently includes a variety of technologies. While we value
  candidates that are familiar with them, we are also confident that
  software engineers who are interested in joining Nubank will be
  able to learn from our team.

  > Horizontally scalable microservices written mostly in Clojure, using Finagle and leveraging upon functional programming techniques and hexagonal architecture
  > High throughput jobs and inter-service communication using Kafka
  > Continuous Integration and Deployment into AWS
  > Storing data in Datomic and DynamoDB
  > Monitoring and observability with Prometheus
  > Running as much as possible in Kubernetes

  ### Benefits
  - Health, dental and life insurance
  - Meal allowance
  - Transportation assistance
  - 30 days of paid vacation
  - Equity at Nubank
  - Parking partnership - discounted parking in our office
  - Free bike parking with showers available
  - NuCare - Our mental health and wellness assistance program
  - NuLanguage - Our language learning program
  - Gympass partnership
  - Extended maternity and paternity Leaves
  - Child care allowance
  - ‘Espaço Feijão’- Private nursing and breastfeeding spaces in our buildings
  - Onsite Health Center - Medical support for every Nubanker in our office

  `,
  "salary": 5000.0,
  "knowledges": [
    {
      "id": 1,
      "name": "Angular",
    }
  ],
  "company": {
    "id": 1,
    "name": "Banco basculhao",
    "city": "São Paulo",
    "state": "SP",
    "street": null,
    "number": 12,
    "complement": "",
    "logoUrl": "https://pbs.twimg.com/profile_images/1435308291756802049/5aNaRJtl_400x400.jpg"
  }
}

export const JobRecruiterMock: JobRecruiterDetailsModel = {
  ...jobMock,
  companyId: 1,
  users: [userMock, userMock2]
}
