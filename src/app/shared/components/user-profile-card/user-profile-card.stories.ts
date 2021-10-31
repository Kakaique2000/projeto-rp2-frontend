import { Meta, Story } from "@storybook/angular";
import { userMock } from '../../services/user.mock';
import { provideStoriesDecorator } from "../../utils/stories.util";
import { UserProfileCardComponent } from './user-profile-card.component';

export default {
  title: 'Components/User/User Card',
  component: UserProfileCardComponent,
  decorators: provideStoriesDecorator()
} as Meta;

const Template: Story<UserProfileCardComponent> = (args: UserProfileCardComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  user: userMock
} as Partial<UserProfileCardComponent>

