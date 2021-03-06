// Button.stories.ts

import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { storiesProviders } from 'src/app/shared/utils/stories.util';
import { TestingSharedModule } from 'src/app/shared/utils/testing.shared.module';
import { JobDto } from '../../shared/models/job.models';
import { JobCardComponent } from './job-card/job-card.component';
import { JobListComponent } from './job-list.component';





export default {
  title: 'Components/Job/Job List',
  component: JobListComponent,
  decorators: [
    moduleMetadata({
      declarations: [JobCardComponent],
      imports: [TestingSharedModule],
      providers: storiesProviders,
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
  ] as JobDto[]
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
  ] as JobDto[]
}


export const Vazio = Template.bind({})
Vazio.args = {
  jobs: [
  ] as JobDto[]
}
