// Button.stories.ts

import { Meta, Story } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';


import { SharedModule } from 'src/app/shared.module';

import { JobListComponent } from './job-list.component';
import { JobListService } from './job-list.service';
import { JobModel } from './job-list.models';
import { JobCardComponent } from './job-card/job-card.component';
import { jobListStub } from './job-list.stub';


export default {
  title: 'Components/Job List',
  component: JobListComponent,
  decorators: [
    moduleMetadata({
      declarations: [JobCardComponent],
      imports: [SharedModule],
      providers: [
        {
          provide: JobListService,
          useValue: jobListStub
        }
      ]
    }),
    componentWrapperDecorator(story => `<div style='display: flex; flex-wrap: wrap'>${story}</div>`)
  ]
} as Meta;

const Template: Story<JobListComponent> = (args: JobListComponent) => ({
  props: args
});

export const Default = Template.bind({})

Default.args = {
  jobs: [
    {
      id: 1,
      city: 'São Paulo',
      description: 'Analista desenvolvedor de React',
      knowledges: [{id: 1, name: 'Angular'}],
      salary: 10000,
      title: 'Analista de React Jr',
    }
  ] as JobModel[]
}

export const Três_Cards = Template.bind({})

Três_Cards.args = {
  jobs: [
    {
      id: 1,
      city: 'São Paulo',
      description: 'Analista desenvolvedor de React focado em aprender novas experiências e se dedicar à equipe de forma que trabalhar seja a única coisa que deseja em sua vida',
      knowledges: [{id: 2, name: 'React'}, {id:1, name: 'Angular'}],
      salary: 10000,
      title: 'Analista desenvolvedor engenharia TI React Jr',
      companyLogo: 'https://pbs.twimg.com/profile_images/1435308291756802049/5aNaRJtl_400x400.jpg'
    },
    {
      id: 1,
      city: 'Rio de Janeiro',
      description: 'Analista desenvolvedor de Angular',
      knowledges: [{id: 1, name: 'Angular'}],
      salary: 10000,
      title: 'Analista de React Jr',
    },
    {
      id: 1,
      city: 'São Paulo',
      description: 'Analista desenvolvedor de Vue',
      knowledges: [{id: 1, name: 'Angular'}],
      salary: 10000,
      title: 'Analista de React Jr',
    },
  ] as JobModel[]
}


export const Vazio = Template.bind({})
Vazio.args = {
  jobs: [
  ] as JobModel[]
}
