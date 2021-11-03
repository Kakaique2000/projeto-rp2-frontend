import { JobDetailsDto, JobRecruiterDetailsDto } from '../../shared/models/job.models';

export const jobMock: JobDetailsDto = {
  "createdAt": "2021-10-31T15:20:33.73134",
  city: 'São Paulo',
  state: 'SP',
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

export const JobRecruiterMock: JobRecruiterDetailsDto = {
  ...jobMock,
  companyId: 1,
  jobApplications: [
    {
      approved: true,
      createdAt: '2021-10-31T19:53:12.0264911',
      updatedAt: '2021-10-31T19:53:12.0264911',
      job: jobMock,
      user: {
        cpf: '45529955886',
        email: 'admin@admin.com',
        id: 1,
        name: 'Ademir Ademilson',
        phone: '11974104310',
        profilePic: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png',
        emailVerified: true,
        roles: [
          {
            name: 'ROLE_ADMIN',
            id: 412,
            authority: 'ADMIN'
          }
        ],
        "knowledges": [
          {
            "knowledge": {
              "id": 1,
              "name": "Angular"
            },
            "knowledgeLevel": "EXPERT",
            "validated": true
          },
          {
            "knowledge": {
              "id": 2,
              "name": "Spring Boot"
            },
            "knowledgeLevel": "EXPERT",
            "validated": true
          },
          {
            "knowledge": {
              "id": 3,
              "name": "React"
            },
            "knowledgeLevel": "EXPERT",
            "validated": true
          },
          {
            "knowledge": {
              "id": 4,
              "name": "React Native"
            },
            "knowledgeLevel": "EXPERT",
            "validated": true
          },
          {
            "knowledge": {
              "id": 5,
              "name": "Vue"
            },
            "knowledgeLevel": "EXPERT",
            "validated": true
          },
          {
            "knowledge": {
              "id": 6,
              "name": "Svelte"
            },
            "knowledgeLevel": "EXPERT",
            "validated": true
          },
          {
            "knowledge": {
              "id": 7,
              "name": "Excel"
            },
            "knowledgeLevel": "AVANÇADO",
            "validated": true
          },
          {
            "knowledge": {
              "id": 8,
              "name": "Power Point"
            },
            "knowledgeLevel": "AVANÇADO",
            "validated": true
          },
          {
            "knowledge": {
              "id": 9,
              "name": "Office"
            },
            "knowledgeLevel": "AVANÇADO",
            "validated": true
          },
        ],
        state: 'SP',
        city: 'São Paulo',

        jobApplications: [
          {
            approved: true,
            createdAt: '2021-10-31T19:53:12.0264911',
            updatedAt: '2021-10-31T19:53:12.0264911',
            job: jobMock,
            user: null as any
          }
        ],
        biography: `Hi my name is Kaique and I identify myself as the most toolmaker in the world haha. I can't see any proccess being slow that I seek some way for doing it the most optimal way possible (without never losing quality!!!)

        I am completely passionate about my career and job, and I never stop studying, It's just addicting for me!! Just love it for all my being!`
      }
    }
  ]
}
