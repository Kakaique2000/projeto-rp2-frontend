// Button.stories.ts
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from 'src/app/shared.module';
import { storiesProviders } from 'src/app/shared/utils/stories.util';
import { JobDescriptorComponent } from './job-descriptor.component';



export default {
  title: 'Components/Job/Job Descriptor',
  component: JobDescriptorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SharedModule,
        MarkdownModule.forRoot()
      ],
      providers: storiesProviders
    }),
  ]
} as Meta;

const Template: Story<JobDescriptorComponent> = (args: JobDescriptorComponent) => ({
  props: args
});

export const Default = Template.bind({})

Default.args = {
  job: {
    id: '1',
    city: 'São Paulo',
    description: 'Analista desenvolvedor de React focado em aprender novas experiências e se dedicar à equipe de forma que trabalhar seja a única coisa que deseja em sua vida',
    knowledges: [{id: 2, name: 'React'}, {id:1, name: 'Angular'}],
    salary: 10000,
    title: 'Analista desenvolvedor engenharia TI React Jr',
    companyLogo: 'https://pbs.twimg.com/profile_images/1435308291756802049/5aNaRJtl_400x400.jpg'
  },
}
