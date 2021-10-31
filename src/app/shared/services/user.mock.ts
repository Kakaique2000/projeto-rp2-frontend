import { UserDto } from '../models/user.model';

export const userMock: UserDto = {
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
  biography: `Hi my name is Kaique and I identify myself as the most toolmaker in the world haha. I can't see any proccess being slow that I seek some way for doing it the most optimal way possible (without never losing quality!!!)

  I am completely passionate about my career and job, and I never stop studying, It's just addicting for me!! Just love it for all my being!`
}

export const userMock2: UserDto = {
  cpf: '45529955886',
  email: 'admin@admin.com',
  id: 1,
  name: 'Ademinho Ademilson',
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
      "knowledgeLevel": "MÉDIO",
      "validated": true
    },
    {
      "knowledge": {
        "id": 2,
        "name": "Spring Boot"
      },
      "knowledgeLevel": "MÉDIO",
      "validated": true
    },
    {
      "knowledge": {
        "id": 3,
        "name": "React"
      },
      "knowledgeLevel": "MÉDIO",
      "validated": true
    },
    {
      "knowledge": {
        "id": 4,
        "name": "React Native"
      },
      "knowledgeLevel": "MÉDIO",
      "validated": true
    },
    {
      "knowledge": {
        "id": 5,
        "name": "Vue"
      },
      "knowledgeLevel": "MÉDIO",
      "validated": true
    },
    {
      "knowledge": {
        "id": 6,
        "name": "Svelte"
      },
      "knowledgeLevel": "MÉDIO",
      "validated": true
    },
    {
      "knowledge": {
        "id": 7,
        "name": "Excel"
      },
      "knowledgeLevel": "INICIANTE",
      "validated": true
    },
    {
      "knowledge": {
        "id": 8,
        "name": "Power Point"
      },
      "knowledgeLevel": "INICIANTE",
      "validated": true
    },
    {
      "knowledge": {
        "id": 9,
        "name": "Office"
      },
      "knowledgeLevel": "INICIANTE",
      "validated": true
    },
  ],
  state: 'SP',
  city: 'São Paulo',
  biography: `Hi my name is Kaique and I identify myself as the most toolmaker in the world haha. I can't see any proccess being slow that I seek some way for doing it the most optimal way possible (without never losing quality!!!)

  I am completely passionate about my career and job, and I never stop studying, It's just addicting for me!! Just love it for all my being!`
}
