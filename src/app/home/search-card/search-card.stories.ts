// Button.stories.ts

import { Meta, Story } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';


import { SharedModule } from 'src/app/shared.module';
import { SearchCardComponent } from './search-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeLoginModule } from 'src/app/login-home/home-login.module';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { HomeModule } from '../home.module';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchParamsComponent } from './search-params/search-params.component';
import { SearchParamsService } from './search-params/search-params.service';
import { HomeLoginService } from 'src/app/login-home/login-home.service';

import { of } from 'rxjs';


export default {
  title: 'Components/Search Card',
  component: SearchCardComponent,
  argTypes: {
    contracted: {
      options: [true, false],
      control: { type: 'boolean' }
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [SearchInputComponent, SearchParamsComponent],
      imports: [SharedModule, HomeLoginModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        {
          provide: SearchParamsService,
          useValue: {
            getCategorias: () => of({"Tecnologia":"Tecnologia","Engenharia":"Engenharia","Industria":"Industria","RH":"RH","Educação":"Educação","Financeiro":"Financeiro","Artes":"Artes","Administração":"Administração","Saúde":"Saúde","Transportes":"Transportes","Construção":"Construção"}),
            getSalaries: () => of({"Entre2000e3000":"Entre R$ 2.000,00 e R$ 3.000,00","Entre1000e2000":"Entre R$ 1.000,00 e R$ 2.000,00","Entre4000e6000":"Entre R$ 4.000,00 e R$ 6.000,00","Ate1000":"Até R$ 1.000,00","Entre3000e4000":"Entre R$ 3.000,00 e R$ 4.000,00","AcimaDe6000":"Acima de R$ 6.000,00"})
          }
        },
        {
          provide: HomeLoginService,
          useValue: {
            loggedUser: {
              name: 'Admin'
            }
          }
        }
      ]
    }),
  ]
} as Meta;

const Template: Story<SearchCardComponent> = (args: SearchCardComponent) => ({
  props: args
});


export const Contraido = Template.bind({});
Contraido.args = {
  contracted: true
}

export const Expandido = Template.bind({});
Expandido.args = {
  contracted: false
}


